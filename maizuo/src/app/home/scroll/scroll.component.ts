import { Component, OnInit } from '@angular/core';
//import { ScrlistService } from '../scrlist.service';

import {GetdatasService} from '../../getdatas.service';
//import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';


declare var Swiper:any;
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
	private datas:any
	private scroll:Array<any>=[]
	
//直接采用ScrlistService服务获取模拟数据
//	constructor(list:ScrlistService) {
//			this.scroll=list.getService()
//			console.log(this.scroll)
//	}
	constructor(private mzdatas:GetdatasService){
		this.datas=mzdatas
	}
  ngOnInit() {
		//获取服务中的后台数据
		this.datas.getItems('http://127.0.0.1:3000/scroll').subscribe(
			res=>{
				this.scroll=res.data.billboards;			
			},error=>{
				console.log(error);
			}	
		);
//		this.datas.getItems('http://localhost:4200/v4/api/billboard/home?__t=1507692278261').subscribe(
//			res=>{
//				this.scroll=res.data.billboards;			
//			},error=>{
//				console.log(error);
//			}	
//		);
		
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
