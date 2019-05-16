import { Component, OnInit, Input } from '@angular/core';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss']
})
export class RatingCardComponent implements OnInit {
  @Input() rating;
  @Input() ranking;

  id;
  points;
  countryInfo;

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.getInput();
    this.countryInfo = this.participantService.getParticipant(this.id);
    console.log(this.countryInfo);
    console.log(this.ranking);
  }

  getInput() {
    for (const key in this.rating) {
      if (this.rating.hasOwnProperty(key)) {
        this.id = key;
        this.points = this.rating[key];
      }
    }
  }
}
