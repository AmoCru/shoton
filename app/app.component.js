"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let AppComponent = class AppComponent {
    constructor() {
        this.currentUser = 'Amaury';
    }
    clicked(event) {
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
    <h1>Welcome on ShotOn! {{currentUser}}</h1>
					<p>ShotOn! enables you to trace the evolution of what you love and to share it with your friends and family.
						Start your journey by clicking on the Register button!
					</p>
    <my-carousel [userID]="currentUser" >Loading carousel...</my-carousel>`
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map