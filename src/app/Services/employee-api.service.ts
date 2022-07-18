import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  //inject httclient in constructor
  constructor(private httpClient:HttpClient) { }

  getEmployees():Observable<any>
  {
    return this.httpClient.get('/api/Employee/GetAllEmployees');

  }
}
