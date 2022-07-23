import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from '../Classes/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  //inject httclient in constructor
  constructor(private httpClient:HttpClient) { }
 // url='https://catfact.ninja/fact'
 //url='//localhost:14251/api/Employee/GetAllEmployees'
 //url1='http://localhost:14251/api/Employee/GetEmployeesById/id'


 //get all employees

  getEmployees():Observable<any>
  { 
     return this.httpClient.get(`/api/Employee/GetAllEmployees`);

    //return this.httpClient.get(this.url);
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
     //return this.httpClient.get(this.url1);


  }

    //############post employee#########

    saveEmployees(data:any):Observable<any>
    {
      //return this.httpClient.post(`/api/Employee/SaveEmployees`,data);
      //http://localhost:14251/api/Employee/SaveEmployees
      return this.httpClient.post("http://localhost:14251/api/Employee/SaveEmployees",data);
    }
  


}
