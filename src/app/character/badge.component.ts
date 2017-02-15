import {Component, Input, OnInit} from '@angular/core';
import {Badge} from './badge';
import {BadgeService} from './badge.service';

@Component({
    selector: 'character-badges',
    templateUrl: 'app/character/badge-component.html'
})

export class BadgeComponent implements OnInit {
    badges: Badge[];

    constructor(
        private badgeService: BadgeService
    ) {}


    getBadges() {
        this.badgeService.getAllBadges()
            .then(badges => this.badges = badges);
    }

    ngOnInit() {
        this.getBadges();
    }
}
