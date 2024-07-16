import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  id!:string;
  employeeData={name:'',email:'',mobile_number:''}
  constructor(private activatedRoute: ActivatedRoute,private _employee:EmployeeService,private fb:FormBuilder){}
  employeeForm=this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]],
    mobile_number:['',[Validators.required]]
  
   })
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      });

      this.getEmployeeData();
  }


  getEmployeeData()
  {
    this._employee.getSingleEmployeeData(this.id).subscribe(res=>{
      this.employeeData = res;
      console.log(this.employeeData);
    })
  }

  employeeUpdate()
  {
   this._employee.updateEmployee(this.employeeForm.value,this.id).subscribe(res=>{
    console.log(res);
    alert("employee updated");
   }) 
  }
}
