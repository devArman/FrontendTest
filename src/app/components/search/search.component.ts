import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {WeatherService} from '../../service/weatherService';

@Component({
  selector: 'search_container',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent   implements OnInit , OnDestroy {

  private routeSubscribe:any;

  public allweatherData:Array<any> = [];
  public weatherData:Array<any> = [];

  public notResult:boolean = !!0;

  constructor(
    public route: ActivatedRoute,
    private weatherService:WeatherService,
    public router: Router,
  )
  {

     this.changeRouts();
  }
  public ngOnInit()
  {
    console.log('search')
    const routeParams: any = this.route.snapshot.params;
    this.notResult = !!0;
    if(routeParams['keyword'] && this.weatherService.keyword != routeParams['keyword']){
      this.weatherService.keyword = routeParams['keyword'];
      this.search();
    }
  }

  public search()
  {
    this.weatherService.getWeatherByKeyword(this.weatherService.keyword).then((res:Array<any>)=>
    {
      if(res && res.length){
        this.allweatherData = res;
        this.weatherData = this.allweatherData.splice(0,10);
      }else{
        this.weatherData = [];
        this.notResult = !!1;
      }
    });
  }

  public ngOnDestroy()
  {
    console.log('desss')
     this.routeSubscribe.unsubscribe();
  }

  public changeRouts() : void
  {
      this.routeSubscribe = this.router.events.subscribe((event:any) =>
      {
          if((<any>this.route.params).value.keyword && event instanceof NavigationEnd) {
            console.log('NavigationEnd',this.weatherService.keyword , (<any>this.route.params).value.keyword)
              if(this.weatherService.keyword && (<any>this.route.params).value.keyword)
              {
                this.allweatherData = [];
                this.weatherData = [];
                this.search();
              }

          }

      });
  }

  @HostListener('window:scroll', ['$event'])
  scrollingTickets($event: Event) : void {
    var doc = document.documentElement;
    if(this.allweatherData.length &&  doc.scrollTop == (doc.offsetHeight - window.innerHeight) ){
      this.weatherData = [...(this.weatherData), ...(this.allweatherData.splice(0,10))];
    }
  }
}
