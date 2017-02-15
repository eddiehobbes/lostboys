import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuildDetailComponent } from './sandbox/guild-detail.component';
import { BadgeComponent } from './character/badge.component';
import { GameMessageSandboxComponent } from './storytelling/game-message-sandbox.component';
import { CompendiumHomeComponent } from './compendium/compendium-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: 'guild',
        component: GuildDetailComponent
    },
    {
        path: 'badges',
        component: BadgeComponent
    },
    {
        path: 'message',
        component: GameMessageSandboxComponent
    },
    {
        path: 'compendium',
        component: CompendiumHomeComponent
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class LostboysRoutingModule {}
