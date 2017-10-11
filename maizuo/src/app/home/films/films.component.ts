import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';

import {GetdatasService} from '../../getdatas.service';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
	private datas:any
	private filmsList:Array<any>;
	private playsoon:Array<any>;
//constructor(list:ListsService) { 
//		this.filmsList=list.getPlayNow()
//		this.playsoon=list.getPlaySoon()
//}
	constructor(private mzdatas:GetdatasService){
		this.datas=mzdatas
	}
  ngOnInit() {
  		//获取服务中的后台数据
		this.datas.getItems('http://127.0.0.1:3000/filmlist').subscribe(
			res=>{
//				console.log(res);
				this.filmsList=res.data.films
			},error=>{
				console.log(error);
			}
			
		);
		this.datas.getItems('http://127.0.0.1:3000/comingsoon').subscribe(
			res=>{
	//			console.log(res);	
					this.playsoon=res.data.films
			},error=>{
				console.log(error);
			}
			
		);
  }

}
