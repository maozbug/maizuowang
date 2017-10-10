import {GuardService} from '../guard.service';

import {MyprofileComponent} from './myprofile.component';

export const myprofileRoutes = [
	{
		path: '',
		component: MyprofileComponent,
		canActivate:[GuardService],
		children: [
		]
	}
];
