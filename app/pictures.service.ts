import {Injectable} from '@angular/core';

import {Picture} from './picture';
import {PICTURES} from './mock-pictures';

@Injectable()
export class PicturesService {
    getPictures(): Picture[] {
        return PICTURES;
    }
}