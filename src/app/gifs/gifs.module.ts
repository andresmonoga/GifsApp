import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home-page.component';
import { GifsCardComponent } from './components/gifs-card/card.component';
import { SearchBoxComponent } from './components/search-box/search-box.components';


@NgModule({
  declarations: [
CardListComponent,
HomePageComponent,
GifsCardComponent,
SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

  ],
  exports: [
HomePageComponent,
  ]
})
export class GifsModule { }
