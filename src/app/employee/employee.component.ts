import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeList:any;
  constructor(private _employee:EmployeeService){}

  ngOnInit()
    {
      this.getEmployee();
    }

  getEmployee()
  {
    this._employee.getEmployeeList().subscribe(res=>{
      this.employeeList = res;
      console.log(this.employeeList);
    })
  }

  deleteEmployee(id:string)
  {
this._employee.deleteEmployee(id).subscribe(res=>{
  alert("employee deleted");
  })
}

}
