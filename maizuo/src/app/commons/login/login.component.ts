import { Component, OnInit } from '@angular/core';
//import {RouterModule, Router} from '@angular/router';
//import{ActivatedRoute,Params} from  '@angular/router';
import {GuardService} from '../../guard.service';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private logintype:any;
	private username:string='';
	private password:string='';
  constructor(private guard:GuardService) { 
  	this.logintype=guard
  }
  ngOnInit() {
  }
	submit(){
		let username=sessionStorage.getItem('username');
		let password=sessionStorage.getItem('password');
		if(this.username==username){
			if(this.password==password){
				console.log(1);
				this.logintype.changetype()
			}
		}else{
			console.log(2);
		}
	}
}
