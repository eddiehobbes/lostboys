import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'header-navigation',
    templateUrl: 'app/navigation/header-navigation/header-navigation.component.html'
})

export class HeaderNavigationComponent implements OnInit {

    constructor(
        private router: Router
    ) {}

    ngOnInit() {

    }

    navigate(dest: string) {
        let destObj = [dest];
        this.router.navigate(destObj);
    }
}
