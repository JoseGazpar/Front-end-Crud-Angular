import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},           // Main component that containt the employee list
  {path: 'create-employee', component: CreateEmployeeComponent},   // Url to create employees 
  {path: '', redirectTo: 'employees', pathMatch: 'full'},          // If the url is http://localhost:4200/, then return main component
  {path: 'update-employee/:id', component: UpdateEmployeeComponent}, // Component to update Employees with the ID as params
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}  // Component to list personal information with the ID as params
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
