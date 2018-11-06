import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {WeatherComponent} from './components/weather/weather.component';

const APP_ROUTES: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search/:keyword',
    component: SearchComponent
  },
  {
    path: 'weather/:woeid',
    component: WeatherComponent
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
