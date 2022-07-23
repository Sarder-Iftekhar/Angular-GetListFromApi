import { Component, OnInit } from '@angular/core';
import { Contact } from '../Classes/contact';
import { ContactApiService } from '../Services/contact-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  listGet:any;
  listPost:any;
  constructor(private _contactApiService:ContactApiService) { }

  ngOnInit(): void {
    this.getAllContacts();

  }
    
 //########### Method ##############

 getAllContacts(){
  this._contactApiService.getContacts().subscribe
  (
    data=>
    {
      this.listGet=data;
    }
  )
}



getUserFormData(val:any)
  {
    // var opost = new Employees()
    // opost.designation='as',
    // opost.employeeFirstName='sa',
    // opost.employeeLastName='as',
    // opost.salary=10000,
    console.warn(val)
     
    this._contactApiService.saveContact(val).subscribe(data=>{
        //console.warn(result)
        this.listPost=data;
        console.warn(data)

      }
    )
   
  } 








//  getEmpById() {
//   this._employeeApiService.getEmployeesByParameter(this.empId).subscribe
//   (
//     data=>
//     {
//       this.empInfo=data;
//       console.log('empInfo ', this.empInfo);
      
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
