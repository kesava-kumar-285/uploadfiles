import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { TheatreComponent } from './theatre/theatre.component';
import { MoviesComponent } from './movies/movies.component';

import { NamesComponent } from './theatre/names/names.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { TrainingComponent } from './training/training.component';
import { CarComponent } from './car/car.component';


const appRoutes: Routes=[
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'theatre',
    component: TheatreComponent,
    children: [
      {
        path: 'names',
        component: NamesComponent
      },
      // {
      //   path: 'edituser',
      //   component: EdituserComponent
      // }
    ]
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'employee/:id',
    component: EmployeeComponent 
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'training',
    component: TrainingComponent
  },
  {
    path: 'car',
    component: CarComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TheatreComponent,
    MoviesComponent,
    NamesComponent,
    EmployeeComponent,
    ProductComponent,
    TrainingComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
