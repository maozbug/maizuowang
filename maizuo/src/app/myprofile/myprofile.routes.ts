import {GuardService} from '../guard.service';

import {MyprofileComponent} from './myprofile.component';

export const myprofileRoutes = [
	{
		path: 'myprofile',
		component: MyprofileComponent,
		canActivate:[GuardService],
		children: [
		]
	}
];
