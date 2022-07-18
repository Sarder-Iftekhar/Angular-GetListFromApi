import { Component } from '@angular/core';
import { Employees } from './Classes/employees';
import { EmployeeApiService } from './Services/employee-api.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCrud';
  constructor(private _employeeApiService:EmployeeApiService){}


  listEmployees:any;
  ngOnInit(){
    this._employeeApiService.getEmployees().subscribe
    (
      data=>
      {
        this.listEmployees=data;
      }
    )
  }

}
