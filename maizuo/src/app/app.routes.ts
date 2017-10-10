import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
	}
]
