import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArcticComponent } from './arctic/arctic.component';
import { MuseComponent } from './muse/muse.component';
import { EcosoftComponent } from './ecosoft/ecosoft.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'arctic', component: ArcticComponent },
      { path: 'muse', component: MuseComponent },
      { path: 'ecosoft', component: EcosoftComponent }
    ])
  ]
})
export class HomeRoutingModule { }
