import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import {AppRoutingModule} from "./app.routing.module";


import {HomeComponent} from './components/home/home.component';
import {WeatherComponent} from './components/weather/weather.component';

import {WeatherService} from './service/weatherService';
import {HttpClientModule} from '@angular/common/http';
import {HeadComponent} from './components/main/head.component';
import {SearchComponent} from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import {Modules} from './modules/modules';
import {LoaderDirective} from './modules/loader/loader';
import {WeekDay} from './pipe/date/weekday';
import {WeatherModel} from './models/weather.model';
import {ConsolidatedModel} from './models/consolidated.model';
@NgModule({
  declarations: [
    LoaderDirective,
    WeatherComponent,
    SearchComponent,
    HeadComponent,
    AppComponent,
    WeekDay,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Modules
  ],
  providers: [
    WeatherModel,
    ConsolidatedModel,
    WeekDay,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
