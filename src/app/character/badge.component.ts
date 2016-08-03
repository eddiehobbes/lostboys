import {Component, Input, OnInit} from 'angular2/core';
import {Badge} from './badge';
import {BadgeService} from './badge.service';

@Component({
    selector: 'character-badges',
    templateUrl: 'app/character/badge-component.html'
})

export class BadgeComponent implements OnInit {
    constructor(
        private badgeService: BadgeService
    ) {}

    badges: Badge[];

    getBadges() {
        this.badgeService.getAllBadges()
            .then(badges => this.badges = badges);
    }

    ngOnInit() {
        this.getBadges();
    }
}
