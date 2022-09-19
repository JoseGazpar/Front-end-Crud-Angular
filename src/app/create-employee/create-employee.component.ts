import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  // Model to create Employee with columns firstName, lastName and emailId.
  employee: Employee = new Employee();
  

  constructor(private employeeService: EmployeeService, // Calling the service Https Request 
    private router: Router) {                           // Calling service Router to navigate between the pages

    }

  ngOnInit(): void {
  }


  // Method to save Employee with the method createEmployee that is the https request to create an Employee
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{  // this.employee, is the Object Employee that containt all the information to create Employees
      console.log(data);
      this.goToEmployeeList();                                              // Calling the method goToEmployeeList()
    },
    error => console.log(error));
  }

  // Method to go employees page.
  goToEmployeeList(){
    this.router.navigate(['/employees']); // url:  http://localhost:4200/employees
  }
  
  // Metod to save Employee
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();         // Calling the method saveEmployee
  }
}