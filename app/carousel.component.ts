import {Component} from '@angular/core';

@Component ({
    selector:'my-carousel',
    template:`<h1>Picture number {{index}}</h1>
    <img src={{currentImg}} style="margin:auto;" (click)="onClick()">`

})

export class CarouselComponent {
    images: string[] = [];
    currentImg:string;
    index:number = 0;

    constructor()
    {
        this.currentImg = "http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg";
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg");
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg");
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg");
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg");
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg");
        this.images.push("http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg");
}

    onClick()
    {
        this.index = Math.floor(Math.random()*this.images.length);
        this.currentImg=this.images[this.index];
    }


}