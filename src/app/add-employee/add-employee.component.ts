import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private fb: FormBuilder,private _employee:EmployeeService) { }
  employeeForm=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
    mobile_number:['',[Validators.required]]
  
   })

   employeeSave()
   {
   console.log(this.employeeForm.value);
   this._employee.createEmployee(this.employeeForm.value).subscribe(res=>
   {
     console.log(res);
     alert("employee added successfully");
   })

    
   }
}
