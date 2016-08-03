import {Component, Input, OnInit} from 'angular2/core';
import {Hero} from './hero.ts';
import {RouteParams} from 'angular2/router';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams
    ) {}

    goBack() {
        window.history.back();
    }
}
