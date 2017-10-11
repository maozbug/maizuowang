import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';
import {GetdatasService} from '../../getdatas.service';
@Component({
  selector: 'app-playnow',
  templateUrl: './playnow.component.html',
  styleUrls: ['./playnow.component.css']
})
export class PlaynowComponent implements OnInit {
	private playnow:Array<any>
	private datas:any;
	private page:number=1;
//constructor(playing:MovieListService) {
////		console.log(playing.getPlayNow())
//		this.playnow=playing.getPlayNow()
//}
	constructor(private mzdatas:GetdatasService){
		this.datas=mzdatas;
		var that=this
		window.onscroll=function(){
			var scrollheight=document.body.scrollHeight
  		var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
  		var screenheight=window.screen.availHeight
//			console.log("页面总高度"+scrollheight)
//			console.log("滚动总高度"+scrolltop)
//			console.log("屏幕总高度"+screenheight)
			var scrollbottom=scrolltop+screenheight
			if(scrollbottom>=scrollheight){
				that.page++
				console.log(that.page);
			}
  	}
	}
  ngOnInit() {
		this.datas.getItems('http://127.0.0.1:3000/playnow?page='+this.page+'&count=7').subscribe(
			res=>{
				console.log(res);
				this.playnow=res.data.films
			},error=>{
				console.log(error);
			}
			
		);
  }
//	ngDoCheck(){
//		this.datas.getItems('http://127.0.0.1:3000/playnow?page='+this.page+'&count=7').subscribe(
//				res=>{
//	//				console.log(res);
//					var arr=new Array;
//					arr.push(res.data.films);
//					console.log(arr)
//	//				this.playnow=arr;
//				},error=>{
//					console.log(error);
//				}
//				
//			);
//	}

}
