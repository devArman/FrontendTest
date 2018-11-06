import {ConsolidatedInterface} from '../interfaces/consolidated.interface';
import {WeatherInterface} from '../interfaces/weather.interface';
import {ConsolidatedModel} from './consolidated.model';

export class WeatherModel implements  WeatherInterface
{

  public consolidated_weather:ConsolidatedModel[] = [];
  public title:string = '';
  public location_type:string = '';
  public woeid:number|null = null;
  public latt_long:string = '';
  public timezone:string = ''


}


