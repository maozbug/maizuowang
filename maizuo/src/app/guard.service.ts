import { Injectable } from '@angular/core';

//引入守卫的插件
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class GuardService implements  CanActivate{
	private username:string;
	private password:string;
	logintype:any=false
  constructor(private router:Router) { }
  //定义守卫的内容
  canActivate():boolean{
  	console.log('路由守卫到这里');
	return this.logintype;
  }
  	changetype(){
  	  this.logintype=!this.logintype;
   	}

}
