import { NgModule } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';

import { ArcticComponent } from './arctic/arctic.component';
import { MuseComponent } from './muse/muse.component';
import { EcosoftComponent } from './ecosoft/ecosoft.component';

import { NavbarComponent } from './component/navbar/navbar.component';
import { TextbarComponent } from './component/textbar/textbar.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { QuoteComponent } from './component/quote/quote.component';
import { ColumnComponent } from './component/column/column.component';
import { ActionComponent } from './component/action/action.component';
import { FeaturesComponent } from './component/features/features.component';

import { SliderComponent } from './component/slider/slider.component';

@NgModule({
  imports: [
    HomeRoutingModule,
    RouterModule
  ],
  declarations: [
    ArcticComponent,
    MuseComponent,
    EcosoftComponent,
    NavbarComponent,
    TextbarComponent,
    GalleryComponent,
    QuoteComponent,
    ColumnComponent,
    ActionComponent,
    FeaturesComponent,
    SliderComponent
  ]
})
export class HomeModule { }
