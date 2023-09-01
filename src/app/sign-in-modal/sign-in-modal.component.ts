/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  Firestore,
  doc,
  addDoc,
  docData,
  collection,
  collectionData,
  getDocs,
  query,
  where,
  QueryConstraint,
  orderBy,
} from '@angular/fire/firestore';

import { UserDB } from '../../types/user';
import { Component, Inject, ViewEncapsulation, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import {
  Auth,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "@angular/fire/auth";

export interface SignInOptions {
  isCreatingAccount: boolean;
}

@Component({
  selector: "app-sign-in-modal",
  templateUrl: "./sign-in-modal.component.html",
  styleUrls: ["./sign-in-modal.component.css"],
  encapsulation: ViewEncapsulation.None,
})

/**
 * A popup window that appears when the user selects the "Sign In" or 
 * "Create Account" buttons on the homepage. Uses the boolean passed in
 * `data` to decide whether to render the "Sign In" modal (whose button 
 * launches the `signInWithUserInfo` function) or the "Create Account"
 * modal (whose button launches the `createNewUserAccount` function).
 */
export class SignInModalComponent {
  private store: Firestore = inject(Firestore);
  private auth = inject(Auth);
  private usersCollectionRef = collection(this.store, 'users');

  username: string = "";
  userEmail: string = "";
  userPassword: string = "";
  errorMessage: string = "";

  // usernameRegExp: RegExp = /^(?=.*^[a-zA-Z0-9])[a-zA-Z0-9_\.]{4,20}$/;
  usernameRegExp: RegExp = /^[a-zA-Z0-9_\.]{5,}$/;
  emailRegExp: RegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/;
  // passwordRegExp: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,15}$/;
  passwordRegExp: RegExp = /^(?=.*[^0-9]).{9,}$/;

  constructor(
    public dialogRef: MatDialogRef<SignInModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SignInOptions
  ) {
    this.dialogRef.backdropClick().subscribe((_) => dialogRef.close());
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  async launchAuthAction() {

    if (this.data.isCreatingAccount && !this.username) { this.errorMessage = '* Please enter your username'; return; }

    if (!this.userEmail) { this.errorMessage = '* Please enter your email'; return; }

    if (!this.userPassword) { this.errorMessage = '* Please enter your password'; return; }

    if (this.data.isCreatingAccount && !this.usernameRegExp.test(this.username)) { this.errorMessage = '* Username should have letters, numbers, underscores or periods only; and have more than 4 characters'; return; }

    if (!this.emailRegExp.test(this.userEmail)) { this.errorMessage = '* Invalid email'; return; }

    if (!this.passwordRegExp.test(this.userPassword)) { this.errorMessage = '* Password should not be entirely made up of numbers; and have more than 8 characters'; return; }


    if (this.data.isCreatingAccount && this.username) {

      const constraints: QueryConstraint[] = []
      constraints.push(where('username', '==', this.username))

      const q = query(this.usersCollectionRef, ...constraints);
      const querySnapshot = await getDocs(q);
      console.log('Number of users: ', querySnapshot.docs.length);

      if (querySnapshot.docs.length) { this.errorMessage = '* Username already registered. Please try another!'; return; }
    }

    if (this.data.isCreatingAccount) {
      this.createNewUserAccount();
    } else {
      this.signInWithUserInfo();
    }
  }

  async createNewUserAccount() {
    try {

      await createUserWithEmailAndPassword(
        this.auth,
        this.userEmail,
        this.userPassword
      );

      if (this.auth && this.auth.currentUser) {
        await updateProfile(
          this.auth.currentUser,
          { displayName: this.username }
        );
      }

      const user = {
        email: this.userEmail,
        username: this.username,
      }

      const userRef = await addDoc(collection(this.store, 'users'), user);

      this.dialogRef.close();
    } catch (err) {
      const error: any = err;
      if (error && error.code == 'auth/email-already-in-use') {
        this.errorMessage = '* Email already registered. Please sign in!';
      } else {
        this.errorMessage = '* Account creation failed. Please try again!';
      }
    }
  }

  async signInWithUserInfo() {
    try {

      await signInWithEmailAndPassword(
        this.auth,
        this.userEmail,
        this.userPassword
      );

      this.dialogRef.close();
    } catch (err) {
      const error: any = err;
      this.errorMessage = '* User sign in failed. Please try again!';
    }
  }
}
