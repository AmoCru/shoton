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
const pictures_service_1 = require('./pictures.service');
let CarouselComponent = class CarouselComponent {
    constructor(picturesService) {
        this.picturesService = picturesService;
        this.index = 0;
        this.pictures = picturesService.getPictures();
        this.currentImg = this.pictures[0];
    }
    onClick() {
        this.index = Math.floor(Math.random() * this.pictures.length);
        this.currentImg = this.pictures[this.index];
    }
};
CarouselComponent = __decorate([
    core_1.Component({
        selector: 'my-carousel',
        template: `<h1>{{currentImg.legend}}</h1>
    <img src={{currentImg.url}} style="margin:auto;" (click)="onClick()">`,
        providers: [pictures_service_1.PicturesService]
    }), 
    __metadata('design:paramtypes', [pictures_service_1.PicturesService])
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=carousel.component.js.map