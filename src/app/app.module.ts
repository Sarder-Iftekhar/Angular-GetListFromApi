import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {EmployeeApiService} from './Services/employee-api.service'
import {FormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component'
import{ContactApiService} from './Services/contact-api.service'


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  //add provider so that it is available to all the components
  providers: [EmployeeApiService,ContactApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
