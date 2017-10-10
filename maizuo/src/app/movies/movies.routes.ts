import { MoviesComponent } from './movies.component';
import {PlaynowComponent} from './playnow/playnow.component';
import {PlaysoonComponent} from './playsoon/playsoon.component';
export const base5Routes = [
	{
		path: '',
		component: MoviesComponent,
		children: [
			{ 
				path: 'movies',
				redirectTo: 'playnow',
				pathMatch: 'full' 
			},
			{ 
				path: 'playnow',
				component: PlaynowComponent 
			},
			{ 
				path: 'playsoon',
				component: PlaysoonComponent
			}
		]
	}
];
