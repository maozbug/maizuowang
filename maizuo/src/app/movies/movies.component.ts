import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  animations: [
    trigger('gotop', [
    	state('void',style({'bottom':'-50px'})),
      state('go', style({'bottom': '80px'})),
      state('stop',style({'bottom':'-50px'})),
      transition('* => *',animate(500))
    ])
  ]
})
export class MoviesComponent implements OnInit {

  private gotop:string
  constructor() {
  	var that=this
  	window.onscroll=function(){
  		var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
  		console.log(scrolltop)
			if(scrolltop>=600){
				that.gotop='go'
			}else{
				that.gotop='stop'
			}
  	}
  }

  ngOnInit() {
  }
	goup(){
		document.documentElement.scrollTop=document.body.scrollTop=0;
	}
}
