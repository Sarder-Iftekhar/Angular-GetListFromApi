import { Component } from '@angular/core';
import { Employees } from './Classes/employees';
//import { EmployeeApiService } from './Services/employee-api.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCrud';
  // constructor(private _employeeApiService:EmployeeApiService){}
  
  // listEmployees: any = [];
  // empId : string = "1";
  // empInfo: any;
  // objPost:any;
  // data:any;


  // ngOnInit(){
  //   this.getAllEmployees();
  //   this.getEmpById();
  //   //this.getUserFormData(this.listEmployees)
  //   //var opost = new Employees();
  //   this.getUserFormData(this.data);

   

   


  // }

  // getEmpById() {
  //   this._employeeApiService.getEmployeesByParameter(this.empId).subscribe
  //   (
  //     data=>
  //     {
  //       this.empInfo=data;
  //       console.log('empInfo ', this.empInfo);
        
  //     }
  //   )
  // }

  // getAllEmployees(){
  //   this._employeeApiService.getEmployees().subscribe
  //   (
  //     data=>
  //     {
  //       this.listEmployees=data;
  //     }
  //   )
  // }

  // //for post data to the api

  // getUserFormData(val:any)
  // {
  //   // var opost = new Employees()
  
  //   // opost.designation='as',
  //   // opost.employeeFirstName='sa',
  //   // opost.employeeLastName='as',
  //   // opost.salary=10000,
  //   console.warn(val)
     
  //   this._employeeApiService.saveEmployees(val).subscribe(data=>{
  //       //console.warn(result)
  //       this.objPost=data;
  //       console.warn(data)

  //     }
  //   )
   
  // } 


}
