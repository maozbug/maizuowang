import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { CommonsModule } from './commons/commons.module';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './commons/header/header.component';
import { LeftComponent } from './commons/left/left.component';

import { ListsService } from './home/lists.service';
import { ShowleftService } from './showleft.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from "@angular/router";
import {appRoutes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
		HeaderComponent,
		LeftComponent
  ],
  imports: [
    BrowserModule,
//  CommonsModule,
    HomeModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ListsService,ShowleftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
