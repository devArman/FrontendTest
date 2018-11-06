import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class WeatherService {

  public iconUrl = 'https://www.metaweather.com/static/img/weather/ico/';

  private beckendUrl: string = 'http://localhost/test.php';

  public loader:boolean = !!1;
  public weatherDataCount:number = 0;

  public keyword:string;
  constructor(
    private http: HttpClient,
  ) {

  }


  public getWeatherByKeyword( keyword ): Promise<any> {
    return this.http.get(
      this.beckendUrl + '?command=search&keyword=' + keyword,
      this.authHeader())
      .toPromise();
  }
  public getWeatherById( id:number ) : Observable<any>
  {
     return this.http.get(
      this.beckendUrl + '?command=location&woeid=' + id,
      this.authHeader())

  }

  private  authHeader() : any {

    let params:any = {
      'Content-Type': 'application/json',
      'Accept': 'application/json;q=0.9,*/*;q=0.8'
    };


    return { headers: new HttpHeaders(params) };
  }
}
