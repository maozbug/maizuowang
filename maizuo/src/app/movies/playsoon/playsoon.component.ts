import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../movie-list.service';
@Component({
  selector: 'app-playsoon',
  templateUrl: './playsoon.component.html',
  styleUrls: ['./playsoon.component.css']
})
export class PlaysoonComponent implements OnInit {
	private playsoon:Array<any>
  constructor(playing:MovieListService) {
//		console.log(playing.getPlaySoon())
		this.playsoon=playing.getPlaySoon()
  }
  ngOnInit() {
  }

}
