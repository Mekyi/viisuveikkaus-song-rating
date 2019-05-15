import { Component, OnInit, Input } from '@angular/core';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss'],
})
export class ParticipantCardComponent implements OnInit {

  @Input() participant;

  //rating: number;
  grades: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
  }

  rate(points: number): void {
    //this.rating = points;
    this.participant['rating'] = points;
    this.participantService.addRating(this.participant['number'], points);
  }
}
