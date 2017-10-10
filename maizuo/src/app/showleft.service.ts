import { Injectable } from '@angular/core';

@Injectable()
export class ShowleftService {
	menutype:any=false
  	constructor() { }
	 changetype(){
  	  this.menutype=!this.menutype;
    }
    gettype(){
    	return this.menutype;
    }
}
