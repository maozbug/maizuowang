import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';
@Component({
  selector: 'app-playnow',
  templateUrl: './playnow.component.html',
  styleUrls: ['./playnow.component.css']
})
export class PlaynowComponent implements OnInit {
	private playnow:Array<any>
  constructor(playing:MovieListService) {
//		console.log(playing.getPlayNow())
		this.playnow=playing.getPlayNow()
  }

  ngOnInit() {
  }

}
