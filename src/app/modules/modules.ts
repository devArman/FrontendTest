import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherView} from './weather/weather.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WeatherView,
  ],
  providers: [
  ],
  exports: [
    WeatherView
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class Modules { }
