import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  ratings: { [id: string]: Number; } = { };
  json;

  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get('./assets/data.json').pipe(
      map(res => res)
    );
  }

  getParticipant(id) {
    for (let index = 0; index < this.json.length; index++) {
      const element = this.json[index];
      if (element['number'] === id) {
        return {'country': element['country'], 'flag': element['flag']};
      }
    }
  }

  setJson() {
    this.getJson()
            .subscribe(data => this.json = data['participants']);
  }

  addRating(key: string, value: number): void {
    this.ratings[key] = value;
  }

  getRatings(): any {
    return this.ratings;
  }

  printRatings() {
    console.log(this.ratings);
  }
}
