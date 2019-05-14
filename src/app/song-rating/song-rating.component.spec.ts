import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongRatingComponent } from './song-rating.component';

describe('SongRatingComponent', () => {
  let component: SongRatingComponent;
  let fixture: ComponentFixture<SongRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
