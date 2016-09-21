import { NgModule } from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { CarouselComponent } from './carousel.component';
import { AppComponent }   from './app.component';



@NgModule({
    imports: [BrowserModule],
    declarations:[AppComponent, CarouselComponent],
    bootstrap:[AppComponent]
})
export class AppModule {

 }