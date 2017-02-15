import {Injectable} from '@angular/core';
import {BADGES} from '../resources/model/mock-badges';
import {Badge} from './badge';

@Injectable()
export class BadgeService {
    getAllBadges() {
        return Promise.resolve(BADGES);
    }
}
