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
let CarouselComponent = class CarouselComponent {
    constructor() {
        this.images = [];
        this.index = 0;
        this.currentImg = "http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg";
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg");
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg");
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg");
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg");
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg");
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg");
    }
    onClick() {
        this.index = Math.floor(Math.random() * this.images.length);
        this.currentImg = this.images[this.index];
    }
};
CarouselComponent = __decorate([
    core_1.Component({
        selector: 'my-carousel',
        template: `<h1>Picture number {{index}}</h1>
    <img src={{currentImg}} style="margin:auto;" (click)="onClick()">`
    }), 
    __metadata('design:paramtypes', [])
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map