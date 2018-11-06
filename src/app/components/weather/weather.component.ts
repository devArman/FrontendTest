import {Component, Input, OnInit, EventEmitter} from '@angular/core';
import {WeatherService} from '../../service/weatherService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'weather-root',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent   implements OnInit {

  public woeid:number;

  public consolidatedWeather:Array<any> =[];

  constructor(
    public route: ActivatedRoute,
    private weatherService:WeatherService,
    public router: Router,
  )
  {

  }

  public ngOnInit()
  {
    const routeParams: any = this.route.snapshot.params;
    if(routeParams['woeid']){
      this.woeid = routeParams['woeid'];
    }
      
  }

  public getConsolidatedWeather(consolidatedWeather:any) : void
  {
    this.consolidatedWeather = consolidatedWeather;
    console.log(consolidatedWeather);
  }
}
