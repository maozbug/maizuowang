import { Component, OnInit } from '@angular/core';
import { ScrlistService } from '../scrlist.service';
declare var Swiper:any;
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

	private scroll:Array<any>=[]
	constructor(list:ScrlistService) {
			this.scroll=list.getService()
//			console.log(this.scroll)
	}
  ngOnInit() {
  	window.onload=function(){
  		var swiper = new Swiper('.swiper-container',{
	  		loop: true,
	  		observer:true,
	      observeParents:true,
	      speed: 2000,
	      autoplayDisableOnInteraction : false,
	      autoplay:1000
	  	});
  	}
  }

}
