import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {EmployeeApiService} from './Services/employee-api.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  //add provider so that it is available to all the components
  providers: [EmployeeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
