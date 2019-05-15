import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  ratings: { [id: string]: Number; } = { };

  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get('./assets/data.json').pipe(
      map(res => res)
    );
  }

  addRating(key: string, value: number): void {
    this.ratings[key] = value;
  }

  printRatings() {
    console.log(this.ratings);
  }
}
