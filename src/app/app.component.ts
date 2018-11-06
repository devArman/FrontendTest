import { Component } from '@angular/core';
import {ConsolidatedModel} from './models/consolidated.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor()
  {
      Array.prototype['minTemp'] = function()
      {
          let date : string = (new Date()).toDateString();
          for(let item in this ){
            if(date == (new Date(this[item].applicable_date)).toDateString()){
              return  this[item].min_temp;

            }
          }
      }
    Array.prototype['maxTemp'] = function(){
      let date : string = (new Date()).toDateString();
      for(let item in this ){
        if(date == (new Date(this[item].applicable_date)).toDateString()){
          return  this[item].max_temp;

        }
      }
    }


    Array.prototype['theTemp'] = function(){
      let date : string = (new Date()).toDateString();
      for(let item in this ){
        if(date == (new Date(this[item].applicable_date)).toDateString()){
          return  this[item].the_temp;

        }
      }
    }

    Array.prototype['theTempIcon'] = function(){
      let date : string = (new Date()).toDateString();
      for(let item in this ){
          if(date == (new Date(this[item].applicable_date)).toDateString()){
            return  this[item].weather_state_abbr + '.ico';

          }
      }
    }

  }
}
