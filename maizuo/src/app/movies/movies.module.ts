import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { PlaynowComponent } from './playnow/playnow.component';
import { PlaysoonComponent } from './playsoon/playsoon.component';
import { MovieListService } from './movie-list.service';

import { DatetimePipe } from '../datetime.pipe';
import { DateweekPipe } from '../dateweek.pipe';

import { RouterModule } from '@angular/router';
import {base5Routes} from './movies.routes';

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(base5Routes)
  ],
  declarations: [MoviesComponent, PlaynowComponent, PlaysoonComponent,DatetimePipe,DateweekPipe],
  exports:[MoviesComponent],
  providers: [MovieListService],
})
export class MoviesModule { }
