import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherService} from '../../service/weatherService';

@Component({
  selector: 'header_container',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})

export class HeadComponent   implements OnInit {



  constructor(
    public router: Router,
    public weatherService:WeatherService,
    public route: ActivatedRoute
  )
  {

  }

  public ngOnInit()
  {

  }

  public searchSubmit()
  {
    this.router.navigate( ["search", this.weatherService.keyword]);
  }
}
