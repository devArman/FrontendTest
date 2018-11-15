import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class WeatherService {

  public iconUrl = 'https://www.metaweather.com/static/img/weather/ico/';

  private beckendUrl: string = 'https://www.metaweather.com/api/location/';

  public loader:boolean = !!1;
  public weatherDataCount:number = 0;

  public keyword:string;
  constructor(
    private http: HttpClient,
  ) {

  }


  public getWeatherByKeyword( keyword ): Promise<any> {
    return this.http.get(
      this.beckendUrl + '/search/?query=' + keyword,
      this.authHeader())
      .toPromise();
  }
  public getWeatherById( id:number ) : Observable<any>
  {
    return this.http.get(
      this.beckendUrl  + id,
      this.authHeader())

  }

  private  authHeader() : any {

    let params:any = {
      'Content-Type': 'application/json',
      'Accept': 'application/json;q=0.9,*/*;q=0.8',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods':'GET',
      'Access-Control-Allow-Origin': '*'
    };
    const headers = new HttpHeaders(params);


    console.log(headers)
    return { headers: headers };
  }
}
