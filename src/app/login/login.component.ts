import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailId: string;
  employee: Employee;

  constructor(public employeeService: EmployeeService,
    private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
  }

  login(){
    //console.log(this.email);
    if(this.emailId != null){
    this.emailId = this.route.snapshot.params['emailId']; // we will get the route parameters using the snapshot.param method. https://www.positronx.io/angular-routing-tutorial-sending-getting-routes-parameters/#:~:text=In%20this%20step%2C%20we%20will%20get%20the%20route,activated%20route%20associated%20with%20the%20presently%20initiated%20component.
    
    this.employee = new Employee(); // Object Employee
    this.employeeService.login(this.emailId).subscribe( data => {
      console.log(data);
    })
  } else{
    console.log(this.emailId + " NOT found...."); 
  }
    
  }

}
