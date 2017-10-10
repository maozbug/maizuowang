import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import { ShowleftService } from '../showleft.service';

import {RouterModule} from "@angular/router";
import {appRoutes} from '../app.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [HeaderComponent, LeftComponent],
  providers: [ShowleftService],
  exports :[HeaderComponent, LeftComponent]
})
export class CommonsModule { }
