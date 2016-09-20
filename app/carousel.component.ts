import {Component, Input} from '@angular/core';
import {Picture} from './picture';
import {PicturesService} from './pictures.service';
import { OnInit } from '@angular/core';

@Component ({
    selector:'my-carousel',
    template:`<h1>{{currentImg.legend}}</h1>
    <img src={{currentImg.url}} style="margin:auto;" (click)="onClick()">
    <h2>{{currentImg.date.getDate()}}/{{currentImg.date.getMonth()}}/{{currentImg.date.getYear()}}</h2>`,
    providers: [PicturesService]

})

export class CarouselComponent implements OnInit {
    @Input() userID: string;
    pictures: Picture[];
    currentImg:Picture;
    index:number = 0;
    picturesService: PicturesService

    constructor(picturesService: PicturesService)
    {
        this.picturesService = picturesService;
    }

    onClick()
    {
        this.index = Math.floor(Math.random()*this.pictures.length);
        this.currentImg=this.pictures[this.index];
    }

    ngOnInit()
    {
        this.pictures = this.picturesService.getPictures(this.userID);
        this.currentImg = this.pictures[0];
    }
}