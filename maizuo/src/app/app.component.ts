import { Component } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('gotop', [
    	state('void',style({'bottom':'-50px'})),
      state('go', style({'bottom': '80px'})),
      state('stop',style({'bottom':'-50px'})),
      transition('* => *',animate(500))
    ])
  ]

})
export class AppComponent {
  title = 'app';
  private gotop:string
  constructor() {
  	var that=this
  	window.onscroll=function(){
  		var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
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
