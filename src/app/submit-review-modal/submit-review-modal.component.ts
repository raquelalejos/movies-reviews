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

import { Component, ViewEncapsulation, inject, Inject } from "@angular/core";
import { Firestore, collection, doc, addDoc, getDocs, updateDoc, collectionData, query, where, QueryConstraint } from "@angular/fire/firestore";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { Auth } from '@angular/fire/auth';

import { Rating } from "../../types/ratings";
import { Observable } from 'rxjs';
import { Timestamp } from 'firebase/firestore'

@Component({
  selector: "app-submit-review-modal",
  templateUrl: "./submit-review-modal.component.html",
  styleUrls: ["./submit-review-modal.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SubmitReviewModalComponent {
  private firestore: Firestore = inject(Firestore);
  private movieId = this.data;
  public auth = inject(Auth);
  public review: Rating = {
    rating: 5,
    title: "",
    body: "",
    email: "",
    username: "",
    timestamp: Timestamp.fromDate(new Date())
  };
  ownReviews: Observable<Rating[]> = new Observable();
  addingReview: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<SubmitReviewModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: string
  ) { }

  ngOnInit(): void {
    const ratingsRef = collection(this.firestore, `movies/${this.movieId}/ratings`);

    if (this.auth && this.auth.currentUser && this.auth.currentUser.email) {
      const constraints: QueryConstraint[] = []
      constraints.push(where('email', '==', this.auth.currentUser.email))

      this.ownReviews = collectionData(
        query(ratingsRef, ...constraints),
        { idField: 'id' }) as Observable<Rating[]>;
    }
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  public async onSubmitClick() {
    this.addingReview = true;

    const ratingsRef = collection(this.firestore, `movies/${this.movieId}/ratings`);

    await addDoc(ratingsRef, {
      ...this.review,
      username: this.auth.currentUser ? this.auth.currentUser.displayName : 'Anonymous',
      email: this.auth.currentUser ? this.auth.currentUser.email : 'Anonymous'
    } as Rating);

    let numRatings = 0;
    let avgRating = 0;
    let sumRating = 0;

    const allReviews = await getDocs(ratingsRef);

    allReviews.forEach((review) => {
      const data = review.data();
      numRatings++;
      sumRating = sumRating + data['rating'];
      // console.log(review.id, " => ", data);
    });

    if (numRatings > 0) {
      avgRating = Math.round(sumRating / numRatings);
    }

    // console.log("numRatings: ", numRatings);
    // console.log("avgRating: ", avgRating);

    const movieRef = doc(this.firestore, `movies/${this.movieId}`);

    await updateDoc(movieRef, {
      avgRating: avgRating,
      numRatings: numRatings
    });

    this.dialogRef.close();
  }

  public determineStarColor(starIndex: number): string {
    return starIndex <= this.review.rating ? "#ce8460" : "gray";
  }
}
