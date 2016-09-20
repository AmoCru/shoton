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
const core_1 = require('angular2/core');
const common_1 = require('angular2/common');
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(exports.Direction || (exports.Direction = {}));
var Direction = exports.Direction;
let Carousel = class Carousel {
    constructor() {
        this.slides = [];
        this.destroyed = false;
    }
    get interval() {
        return this._interval;
    }
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    ngOnDestroy() {
        this.destroyed = true;
    }
    select(nextSlide, direction = Direction.UNKNOWN) {
        let nextIndex = nextSlide.index;
        if (direction === Direction.UNKNOWN) {
            direction = nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
        }
        // Prevent this user-triggered transition from occurring if there is already one in progress
        if (nextSlide && nextSlide !== this.currentSlide) {
            this.goNext(nextSlide, direction);
        }
    }
    goNext(slide, direction) {
        if (this.destroyed) {
            return;
        }
        slide.direction = direction;
        slide.active = true;
        if (this.currentSlide) {
            this.currentSlide.direction = direction;
            this.currentSlide.active = false;
        }
        this.currentSlide = slide;
        // every time you change slides, reset the timer
        this.restartTimer();
    }
    getSlideByIndex(index) {
        let len = this.slides.length;
        for (let i = 0; i < len; ++i) {
            if (this.slides[i].index === index) {
                return this.slides[i];
            }
        }
    }
    getCurrentIndex() {
        return !this.currentSlide ? 0 : this.currentSlide.index;
    }
    next() {
        let newIndex = (this.getCurrentIndex() + 1) % this.slides.length;
        if (newIndex === 0 && this.noWrap) {
            this.pause();
            return;
        }
        return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
    }
    prev() {
        let newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;
        if (this.noWrap && newIndex === this.slides.length - 1) {
            this.pause();
            return;
        }
        return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
    }
    restartTimer() {
        this.resetTimer();
        let interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(() => {
                let nInterval = +this.interval;
                if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
                    this.next();
                }
                else {
                    this.pause();
                }
            }, interval);
        }
    }
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = null;
        }
    }
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    addSlide(slide) {
        slide.index = this.slides.length;
        this.slides.push(slide);
        if (this.slides.length === 1 || slide.active) {
            this.select(this.slides[this.slides.length - 1]);
            if (this.slides.length === 1) {
                this.play();
            }
        }
        else {
            slide.active = false;
        }
    }
    removeSlide(slide) {
        this.slides.splice(slide.index, 1);
        if (this.slides.length === 0) {
            this.currentSlide = null;
            return;
        }
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].index = i;
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], Carousel.prototype, "noWrap", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], Carousel.prototype, "noPause", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], Carousel.prototype, "noTransition", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Number)
], Carousel.prototype, "interval", null);
Carousel = __decorate([
    core_1.Component({
        selector: 'carousel',
        directives: [common_1.NgFor],
        template: `
    <div (mouseenter)="pause()" (mouseleave)="play()" class="carousel slide">
      <ol class="carousel-indicators" [hidden]="slides.length <= 1">
         <li *ngFor="#slidez of slides" [class.active]="slidez.active === true" (click)="select(slidez)"></li>
      </ol>
      <div class="carousel-inner"><ng-content></ng-content></div>
                  <a class="left carousel-control" (click)="prev()" [hidden]="!slides.length">
                  <span class="glyphicon glyphicon-chevron-left"></span>
                  </a>
                  <a class="right carousel-control" (click)="next()" [hidden]="!slides.length">
                  <span class="glyphicon glyphicon-chevron-right"></span>
                 </a>
    </div>
  `
    }), 
    __metadata('design:paramtypes', [])
], Carousel);
exports.Carousel = Carousel;
//# sourceMappingURL=carousel.component.js.map