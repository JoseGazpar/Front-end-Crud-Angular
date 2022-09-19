import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;          // employee's id
  employee: Employee;  // Object Employee that Containt firstName, lastName and emailId
  
  constructor(private route: ActivatedRoute,  // Calling the service ActivatedRoute = allows access to data wherein a route is associated with a loaded component in an outlet.
  private employeService: EmployeeService) {  // Calling the service EmployeeService that containt the http request to get/delete/update/create Employees

    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // we will get the route parameters using the snapshot.param method. https://www.positronx.io/angular-routing-tutorial-sending-getting-routes-parameters/#:~:text=In%20this%20step%2C%20we%20will%20get%20the%20route,activated%20route%20associated%20with%20the%20presently%20initiated%20component.

    this.employee = new Employee(); // Object Employee
    this.employeService.getEmployeeById(this.id).subscribe( data => { // Calling the method getEmployeeById with the employee's id
    this.employee = data;
    
  });
  }


}