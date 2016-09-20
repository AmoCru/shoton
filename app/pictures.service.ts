import {Injectable} from '@angular/core';

import {Picture} from './picture';
import {PICTURES, PICTURES_SIMPLE} from './mock-pictures';

@Injectable()
export class PicturesService {
    getPictures(user: string): Picture[] {
        if (user==="Amaury") return PICTURES;
        else return PICTURES_SIMPLE;
    }
}