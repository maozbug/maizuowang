import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonsModule } from './commons/commons.module';
import { HomeModule } from './home/home.module';

import { ListsService } from './home/lists.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from "@angular/router";
import {appRoutes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CommonsModule,
    HomeModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
