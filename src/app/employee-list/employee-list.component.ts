import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]; // Object Employee that containt firstName, lastName and emailId

  constructor(private employeeService: EmployeeService, // Calling the service EmployeeService that containt all the http request
    private router: Router) {                           // Calling the service Router to nagivate between the pages.

    }

  ngOnInit(): void {
    this.getEmployees();  // Initialize the method getEmployees
  }

  // Method to list all the currents employees in our db
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => { // Calling the method getEmployeesList to list all the currents employees
    this.employees = data;
    });
  }


  // Method to nagivate in the page that containt personal information per employee
  employeeDetails(id: number){ 
    this.router.navigate(['employee-details', id]); // url = http://localhost:4200/employee-details/idHere
  }


  // Method to update employees
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);  // url = http://localhost:4200/update-employee/idHere
  }

  // Method to delete employees
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {  // Calling the method deleteEmployee (http request) with the employee's id
      console.log(data);
      this.getEmployees();                                        // Caling the method getEmployees to reload the list
    })
  }
}