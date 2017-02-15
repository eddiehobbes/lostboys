import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppComponent} from './lostboys-main.component';
import {HeaderNavigationComponent} from './navigation/header-navigation/header-navigation.component';
import {BadgeComponent} from './character/badge.component';
import {BadgeService} from './character/badge.service';
import {GuildDetailComponent} from './sandbox/guild-detail.component';
import {GameMessageComponent} from './storytelling/game-message.component';
import {GameMessageSandboxComponent} from './storytelling/game-message-sandbox.component';
import {CompendiumHomeComponent} from './compendium/compendium-home.component';
import {MessageService} from './storytelling/message.service';

import { LostboysRoutingModule } from './lostboys-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        LostboysRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderNavigationComponent,
        BadgeComponent,
        GuildDetailComponent,
        GameMessageComponent,
        GameMessageSandboxComponent,
        CompendiumHomeComponent
    ],
    providers: [
        BadgeService,
        MessageService
    ],
    bootstrap: [ AppComponent ]
})

export class LostboysModule { }
