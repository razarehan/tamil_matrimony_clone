import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {NewMatchesComponent} from './components/new-matches/new-matches.component'
import {DailyRecommndsComponent} from './components/daily-recommnds/daily-recommnds.component'
import{RemindAgainComponent} from './components/remind-again/remind-again.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, NewMatchesComponent, DailyRecommndsComponent,RemindAgainComponent]
})
export class HomePageModule {}
