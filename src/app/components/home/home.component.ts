import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {WeatherService} from '../../service/weatherService';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   implements OnInit {
  title = 'my-app';

  public  defoultCitys:Array<number> = [638242,2358820,44418,565346,560743,9807];

  constructor(
    public weatherService:WeatherService,

  )
  {
  }

  public ngOnInit()
  {
  }
}
