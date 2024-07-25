import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  employees= [
    { id: 1, name: 'John Doe', designation: 'Software Engineer', department: 'IT', salary: 60000 },
    { id: 2, name: 'Jane Smith', designation: 'Project Manager', department: 'IT', salary: 80000 },
    { id: 3, name: 'Michael Johnson', designation: 'UX Designer', department: 'Design', salary: 55000 },
    { id: 4, name: 'Emily Davis', designation: 'QA Engineer', department: 'Quality Assurance', salary: 50000 },
    { id: 5, name: 'Robert Brown', designation: 'System Analyst', department: 'IT', salary: 70000 }
  ];
}
