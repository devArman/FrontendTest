import {ConsolidatedInterface} from './consolidated.interface';

export interface WeatherInterface  {
  "consolidated_weather":ConsolidatedInterface[],
  "title":string,
  "location_type":string,
  "woeid":number,
  "latt_long":string,
  "timezone":string
}
