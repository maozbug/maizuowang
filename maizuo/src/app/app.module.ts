import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonsModule } from './commons/commons.module';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';

//import { ScrlistService } from './home/scrlist.service';
import { ListsService } from './home/lists.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { DatetimePipe } from './datetime.pipe';
//import { DateweekPipe } from './dateweek.pipe';
import {RouterModule} from "@angular/router";
import {appRoutes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
//  DatetimePipe,
//  DateweekPipe,
  ],
  imports: [
    BrowserModule,CommonsModule,HomeModule,BrowserAnimationsModule,MoviesModule,RouterModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
