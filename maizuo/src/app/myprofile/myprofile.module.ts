import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyprofileComponent } from './myprofile.component';

import {RouterModule} from "@angular/router";
import {myprofileRoutes} from './myprofile.routes';
//import {GuardService} from '../guard.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(myprofileRoutes)
  ],
  declarations: [MyprofileComponent],
//	providers:[GuardService]
})
export class MyprofileModule { }
