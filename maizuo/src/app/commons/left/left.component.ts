import { Component, OnInit } from '@angular/core';
import { ShowleftService } from '../../showleft.service';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
	animations: [
	   trigger('signal', [
	    state('showleft', style({'transform': 'translateX(0)'})),
	    state('hideleft',style({'transform': 'translateX(-100%)'})),
	    transition('showleft <=> hideleft',animate(500))
	  ]),
	  trigger('bgshow', [
	    state('shows', style({'display':'block','opacity':'1'})),
	    state('hides',style({'display':'none','opacity':'0'})),
	    transition('shows <=> hides',animate(500))
	  ])
	]
})
export class LeftComponent implements OnInit {

  private showtype :any;
  private	signal :string;
  private	bgshow :string;
	private show:Boolean=false;
  constructor(showleft:ShowleftService) {
  	this.showtype=showleft;
  }
	ngOnInit() {
		this.show=this.showtype.gettype();
	}
	ngDoCheck(){
		this.show=this.showtype.gettype();
		if(this.show){
			this.signal= 'showleft'
			this.bgshow= 'shows'
		}else{
			this.signal= 'hideleft'
			this.bgshow= 'hides'
		}
	}
	clsMenu(){
		this.show=this.showtype.changetype();
	}

}
