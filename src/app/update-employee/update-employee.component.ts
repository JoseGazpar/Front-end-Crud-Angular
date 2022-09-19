import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;                            //employee's id
  employee: Employee = new Employee();   // Object Employee that containt firstName, lastName and emailId from Employees

  constructor(private employeeService: EmployeeService, // Calling the service EmployeeService that containt all the http request
    private route: ActivatedRoute,                      // Calling the service ActivatedRoute = allows access to data wherein a route is associated with a loaded component in an outlet.
    private router: Router) {                           // Calling the service Router to navigate between the pages.
      
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // we will get the route parameters using the snapshot.param method. https://www.positronx.io/angular-routing-tutorial-sending-getting-routes-parameters/#:~:text=In%20this%20step%2C%20we%20will%20get%20the%20route,activated%20route%20associated%20with%20the%20presently%20initiated%20component.

    this.employeeService.getEmployeeById(this.id).subscribe(data => {  // Calling the method getEmployeeById that the http request to get employee by id
    this.employee = data;
    }, error => console.log(error));

  }

  // Method to submit new information 
  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{ // Calling the method updateEmployee with the id and object that containt new data
      this.goToEmployeeList(); // Return main url
    }
    , error => console.log(error));
  }


  // Method to return in the main url
  goToEmployeeList(){
    this.router.navigate(['/employees']); // URL = http://localhost:4200/employees
  }
}