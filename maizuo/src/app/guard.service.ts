import { Injectable } from '@angular/core';

//引入守卫的插件
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class GuardService implements  CanActivate{
	private username:string;
	private password:string;
  constructor(private router:Router) { }
  //定义守卫的内容
  canActivate():boolean{
  	console.log('路由守卫到这里');
		this.username = sessionStorage.getItem('username');
		this.password = sessionStorage.getItem('password');
		if(this.username == '15180456682'){
			return true;
		}else{
			alert('登录失败,请先做登录处理');
			this.router.navigateByUrl('login');
			return false;
			
		}
//	return true;
  }

}
