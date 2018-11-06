import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { WeatherService} from '../../service/weatherService';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {WeatherModel} from '../../models/weather.model';
import {ConsolidatedModel} from '../../models/consolidated.model';

@Component({
  selector: 'weather-module',
  templateUrl: './weather.module.html',
})
export class WeatherView   implements OnInit , OnDestroy {


  protected ngUnsubscribe: any;
  @Input('keyword')
  private keyword:string = '';

  @Input('woeid')
  public woeid:number;

  @Output('getConsolidatedWeather')
  public getConsolidatedWeather: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  @Input('weatherData')
  public weatherData:any;

  @Input()
  index:number;

  @Input()
  count:number;


  constructor(
    public route: ActivatedRoute,
    public weatherService:WeatherService,
    public weatherModel : WeatherModel,
    public router: Router,
  )
  {
  }

  public ngOnInit()
  {
    // console.log('WeatherModel',new WeatherModel())
    // const routeParams: any = this.route.snapshot.params;
    // if(routeParams['woeid']){
    //   this.woeid = routeParams['woeid'];
    // }
    console.log( this.ngUnsubscribe)

    if(this.woeid){
      this.ngUnsubscribe =  this.weatherService.getWeatherById(this.woeid)
        .subscribe((data:WeatherModel) =>
        {
          if(data){
            this.weatherData = data;
            this.getConsolidatedWeather.emit(data.consolidated_weather);
          }
      });
    }
      
  }

  public redirectToWeather(woeid:number)
  {
    this.ngUnsubscribe.unsubscribe();
    this.router.navigate( ['weather', woeid])
  }

  public ngOnDestroy() : void
  {
    this.ngUnsubscribe.unsubscribe();
  }
}
