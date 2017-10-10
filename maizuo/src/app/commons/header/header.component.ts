import { Component, OnInit } from '@angular/core';
import { ShowleftService } from '../../showleft.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private showtype:any;
  constructor(showleft:ShowleftService) { 
  	this.showtype=showleft;
  }

  ngOnInit() {
  }
	OpMenu(){
		this.showtype.changetype();
	}
}
