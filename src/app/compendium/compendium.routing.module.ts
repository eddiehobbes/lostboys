import { CompendiumHomeComponent } from './compendium-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path:'',
    component: CompendiumHomeComponent,
    children: [ {
        path: '',
        children: [
            
        ]
    }]
}]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class CompendiumRoutingModule {}