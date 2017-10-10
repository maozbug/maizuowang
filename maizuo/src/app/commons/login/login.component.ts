import { Component, OnInit } from '@angular/core';
//import {RouterModule, Router} from '@angular/router';
//import{ActivatedRoute,Params} from  '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private username:string=''
	private password:string=''
  constructor() { }

  ngOnInit() {
  }
	submit(){
		let username=sessionStorage.getItem('username');
		let password=sessionStorage.getItem('password');
//		if(this.username==username){
//			if(this.password==password){
//				
//			}
//		}else{
//			
//		}
	}
}
