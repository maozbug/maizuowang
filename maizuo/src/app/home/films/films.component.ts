import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
	private filmsList:Array<any>;
	private playsoon:Array<any>;
  constructor(list:ListsService) { 
	this.filmsList=list.getPlayNow()
	this.playsoon=list.getPlaySoon()
//	console.log(this.filmsList);
//	console.log(this.playsoon);
  }
  ngOnInit() {
  }

}
