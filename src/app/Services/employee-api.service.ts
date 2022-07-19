import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  //inject httclient in constructor
  constructor(private httpClient:HttpClient) { }
 // url='https://catfact.ninja/fact'

 //get all employees

  getEmployees():Observable<any>
  { 
    return this.httpClient.get(`/api/Employee/GetAllEmployees`);
  }

  //############get employeesByParameter#########
  //Steps:
  //1: Take a function
  //2: go to app.component.ts and call this in ngOnInit and subscribe
  //3: go to app.component.html and show the data

  getEmployeesByParameter(employeeID:string):Observable<any>
  {
    //passed parameter employeeID:string                 //error:3
    //get by using doller sign ----  ${employeeID}
    //like this change param name in backend controller in getEmployeeBy parameter function also
    return this.httpClient.get(`/api/Employee/GetEmployeesById/id/${employeeID}`);
  }

    //############get employeesByParameter######### 



}
