import {WeatherModel} from './weather.model';
import {ConsolidatedInterface} from '../interfaces/consolidated.interface';

export class ConsolidatedModel   implements  ConsolidatedInterface
{
  public id:number | null = null;
  public weather_state_name :  string = ""; 
  public weather_state_abbr :string = ""; 
  public wind_direction_compass :string = ""; 
  public created :string = ""; 
  public applicable_date :string = ""; 
  public min_temp :number|null = null;
  public max_temp :number|null = null;
  public the_temp :number|null = null;
  public wind_speed :number|null = null;
  public wind_direction :number|null = null;
  public air_pressure :number|null = null;
  public humidity:number|null = null;
  public visibility:number|null = null;
  public predictability:number = null;
}


