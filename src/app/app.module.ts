import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material';
import { SongRatingComponent } from './song-rating/song-rating.component';
import { ParticipantService } from './participant.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SongRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [ParticipantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
