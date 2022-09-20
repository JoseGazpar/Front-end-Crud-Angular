import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailId') email: ElementRef; // Value from  HTML template
  
  id: number;
  employee: Employee;

  constructor(public employeeService: EmployeeService,
    private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    
  }

  login(){
     
    // Object.entries(this.employee).forEach((this.email, this.email) => {
    //   console.log("Hello " + this.email)
    // });

    // this.employeeService.login(this.id).subscribe( data => {
    //   console.log(data);
    // });
    
  }

}
