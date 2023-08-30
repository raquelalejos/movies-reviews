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

import { Component, OnInit, inject } from '@angular/core';
import {
  Firestore,
  doc,
  docData,
  collection,
  collectionData,
  query,
  where,
  QueryConstraint,
  orderBy,
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../types/movie';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {
  SubmitReviewModalComponent
} from '../submit-review-modal/submit-review-modal.component';
import { Auth, signOut } from '@angular/fire/auth';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})

export class MoviePageComponent implements OnInit {
  movieData: Observable<Movie> = new Observable();
  private firestore: Firestore = inject(Firestore);
  public auth: Auth = inject(Auth);
  private movieId = "";

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(SubmitReviewModalComponent, { data: this.movieId });
  }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id') as string;
    const docRef = doc(this.firestore, `movies/${this.movieId}`);

    this.movieData = docData(
      docRef, { idField: 'id' }) as Observable<Movie>;
  }

  openSignInDialog(): void {
    this.dialog.open(SignInModalComponent, { data: { isCreatingAccount: false } });
  }

  openCreateAccountDialog(): void {
    this.dialog.open(SignInModalComponent, { data: { isCreatingAccount: true } });
  }

  public signOutWithFirebase() {
    signOut(this.auth);
  }
}
