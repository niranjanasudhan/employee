import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { EmployeeViewSingleComponent } from './employee-view-single/employee-view-single.component';
import { SynchronousComponent } from './synchronous/synchronous.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeViewComponent,
    EmployeeViewSingleComponent,
    SynchronousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,  // Included for form validation
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
