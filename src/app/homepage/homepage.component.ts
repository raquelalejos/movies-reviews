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

import { Component, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  QueryConstraint,
  orderBy,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Movie } from '../../types/movie';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { DEFAULT_SORT_DATA, DialogData } from '../filter-dialog/dialogdata';
import { Auth, signOut } from '@angular/fire/auth';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  private store: Firestore = inject(Firestore);
  public auth: Auth = inject(Auth);
  private moviesCollectionRef = collection(this.store, 'movies');
  sortingData: DialogData = DEFAULT_SORT_DATA;
  movies = collectionData(
    this.moviesCollectionRef,
    { idField: 'id' }) as Observable<Movie[]>;

  private fetchWithUpdatedFilters = () => {
    const constraints: QueryConstraint[] = []

    if (this.sortingData.title !== '') {
      constraints.push(where('title', '>=', this.sortingData.title))
    }
    if (this.sortingData.year !== 'Any') {
      constraints.push(where('year', '==', this.sortingData.year))
    }
    if (this.sortingData.avgRating !== 'Any') {
      constraints.push(where('avgRating', '==', parseInt(this.sortingData.avgRating)))
    }
    if (this.sortingData.sortBy === 'Avg Rating') {
      constraints.push(orderBy('avgRating', 'desc'));
    } else {
      constraints.push(orderBy('title', 'asc'));
    }

    this.movies = collectionData(
      query(this.moviesCollectionRef, ...constraints),
      { idField: 'id' }) as Observable<Movie[]>;
  }

  openFilterDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      data: this.sortingData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.sortingData = result;
      this.fetchWithUpdatedFilters();

      console.log("this.auth: ", this.auth);
    });

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

  constructor(public dialog: MatDialog, private router: Router,) { }
}
