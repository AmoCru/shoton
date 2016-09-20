import {Component} from '@angular/core';
import {Picture} from './picture';
import {PicturesService} from './pictures.service';

@Component ({
    selector:'my-carousel',
    template:`<h1>{{currentImg.legend}}</h1>
    <img src={{currentImg.url}} style="margin:auto;" (click)="onClick()">`,
    providers: [PicturesService]

})

export class CarouselComponent {
    pictures: Picture[];
    currentImg:Picture;
    index:number = 0;

    constructor(private picturesService: PicturesService)
    {
        this.pictures = picturesService.getPictures();
        this.currentImg = this.pictures[0];
    }

    onClick()
    {
        this.index = Math.floor(Math.random()*this.pictures.length);
        this.currentImg=this.pictures[this.index];
    }


}