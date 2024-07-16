import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private main_url = 'http://localhost:3000/';
 private _employeeList="items";
  constructor(private http:HttpClient) { }


  getEmployeeList() {
    return this.http.get<any>(this.main_url+this._employeeList);
  }
  createEmployee(employee:any)
  {
    return this.http.post<any>(this.main_url+this._employeeList,employee);
  }
  getSingleEmployeeData(id:string)
  {
    return this.http.get<any>(this.main_url+this._employeeList+'/'+id)
}
updateEmployee(employee:any,id:string)
{
  return this.http.put<any>(this.main_url+this._employeeList+'/'+id,employee);

}

deleteEmployee(id:string)
{
  return this.http.delete<any>(this.main_url+this._employeeList+'/'+id);
}

}
