import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyprofileModule } from './myprofile/myprofile.module';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './commons/header/header.component';
import { LeftComponent } from './commons/left/left.component';
import { FormsModule } from '@angular/forms';
import {HttpModule,Http} from '@angular/http';
import {GuardService} from './guard.service';


import { ListsService } from './home/lists.service';
import { ShowleftService } from './showleft.service';
import { GetdatasService } from './getdatas.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule} from "@angular/router";
import {appRoutes} from './app.routes';
import { LoginComponent } from './commons/login/login.component';
import { RegisetComponent } from './commons/regiset/regiset.component';


@NgModule({
  declarations: [
    AppComponent,
		HeaderComponent,
		LeftComponent,
		LoginComponent,
		RegisetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyprofileModule,
    HomeModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ListsService,ShowleftService,GetdatasService,GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
