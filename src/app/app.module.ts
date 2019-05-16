import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SongRatingComponent } from './song-rating/song-rating.component';
import { ParticipantService } from './participant.service';
import { HttpClientModule } from '@angular/common/http';
import { ParticipantCardComponent } from './participant-card/participant-card.component';
import { RatedSongsComponent } from './rated-songs/rated-songs.component';
import { RatingCardComponent } from './rating-card/rating-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SongRatingComponent,
    ParticipantCardComponent,
    RatedSongsComponent,
    RatingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [ParticipantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
