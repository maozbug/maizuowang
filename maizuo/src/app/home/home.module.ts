import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { TimesPipe } from './times.pipe';
import { HomeComponent } from './home.component';
import { ScrollComponent } from './scroll/scroll.component';
//import { DatetimesPipe } from './datetimes.pipe';

import { ScrlistService } from './scrlist.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilmsComponent, TimesPipe, HomeComponent, ScrollComponent],
  exports :[HomeComponent],
  providers: [ScrlistService]
})
export class HomeModule { }
