import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-rated-songs',
  templateUrl: './rated-songs.component.html',
  styleUrls: ['./rated-songs.component.scss']
})
export class RatedSongsComponent implements OnInit {
  ratings = [];

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    setInterval(() => {
      this.sortRatings(this.getRatings());
    }, 2000);
  }

  getRatings(): { [id: string]: Number; } {
    return this.participantService.getRatings();
  }

  sortRatings( ratings: { [id: string]: Number; } ) {
    const sorted = [];
    for (let index = 10; index > 0; index--) {
      for (const key in ratings) {
        if (ratings[key] === index) {
          const ratingObject = {};
          ratingObject[key] = ratings[key];
          sorted.push(ratingObject);
        }
      }
    }
    this.ratings = sorted;
  }

}
