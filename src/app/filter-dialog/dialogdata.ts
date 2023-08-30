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


// TODO(abradham): Move to separate file to make accessible for emulators
export interface DialogData {
    sortBy: 'Avg Rating' | 'Title';
    title: string;
    year: string;
    avgRating: string;
}

export const DEFAULT_SORT_DATA: DialogData = {
    sortBy: 'Avg Rating',
    title: '',
    year: 'Any',
    avgRating: 'Any'
}

export const filterYears = [
    'Any',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017'
]

export const filterAvgRatings = [
    'Any',
    '5',
    '4',
    '3',
    '2',
    '1',
    '0'
]

export const filterCategories = [
    'Any',
    'Action',
    'Science',
    'Fiction',
    'Horror',
    'Comedy',
    'Adventure',
    'Fantasy',
    'Crime',
    'Thriller',
    'Drama',
    'History',
    'Mystery',
    'Family',
    'Romance',
    'Science Fiction'
]
