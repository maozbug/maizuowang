import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regiset',
  templateUrl: './regiset.component.html',
  styleUrls: ['./regiset.component.css']
})
export class RegisetComponent implements OnInit {

  private username:string=''
	private password:string=''
	private repassword:string=''
  constructor(private router:Router) { }

  ngOnInit() {
  }
	submit(){
		if(this.password==this.repassword){
			sessionStorage.setItem('username', this.username);
			sessionStorage.setItem('password', this.password);
			this.router.navigateByUrl('login');
		}	
	}
}
