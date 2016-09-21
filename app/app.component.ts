import {Component} from '@angular/core';
import {Auth} from './auth.service';

@Component ({
    selector:'my-app',
    template:`
    <h1>Welcome on ShotOn! {{currentUser}}</h1>
					<p>ShotOn! enables you to trace the evolution of what you love and to share it with your friends and family.
						Start your journey by clicking on the Register button!
					</p>
    <my-carousel [userID]="currentUser" >Loading carousel...</my-carousel>`
})

export class AppComponent {
    public currentUser: string = 'Amaury';

    constructor() {}

    clicked(event) {
        
    }
}