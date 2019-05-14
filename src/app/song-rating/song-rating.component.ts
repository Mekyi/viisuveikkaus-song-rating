import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../participant.service';
import { Participant } from '../participant';

@Component({
  selector: 'app-song-rating',
  templateUrl: './song-rating.component.html',
  styleUrls: ['./song-rating.component.scss']
})
export class SongRatingComponent implements OnInit {

  participants: Participant[] = [];

  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants(): void {
    this.participantService.getJson()
            .subscribe(data => this.participants = data['participants']);
  }

}
