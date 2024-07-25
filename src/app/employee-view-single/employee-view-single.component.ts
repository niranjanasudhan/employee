import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-view-single',
  templateUrl: './employee-view-single.component.html',
  styleUrls: ['./employee-view-single.component.css']
})
export class EmployeeViewSingleComponent {
  @Input() item: any ;
}
