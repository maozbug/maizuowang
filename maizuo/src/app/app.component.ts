import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app';
//private gotop:string
  constructor() {
		
  }

  ngOnInit() {
//		if (true) {
//			// localhost:3000 等价于 127.0.0.1
//			window.apiAddress = "http://127.0.0.1:3000"
//		}else{
//			window.apiAddress = "http://120.25.107.16:3000"
//		}
  }
}
