import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './commons/login/login.component';
import { RegisetComponent } from './commons/regiset/regiset.component';
//import { MoviesModule } from './movies/movies.module';

export const appRoutes=[
	{
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
	{
		path:"home",
		component:HomeComponent
	},
	{
		path: 'movies',
		loadChildren: './movies/movies.module#MoviesModule'
	},
	{
		path: 'login',
		component:LoginComponent
	},
	{
		path: 'register',
		component:RegisetComponent
	},
	{
		path: 'myprofile',
		loadChildren: './myprofile/myprofile.module#MyprofileModule'
	},
]
