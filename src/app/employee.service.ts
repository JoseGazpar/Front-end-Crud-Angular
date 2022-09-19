import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";    // Getting the current URL to request information in the DB employees.

  constructor(private httpClient: HttpClient) {                  // Calling Http service to request data.

  }
  
  login(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
  // Method to call all the users in the db.
  getEmployeesList(): Observable<Employee[]>{                  
    return this.httpClient.get<Employee[]>(`${this.baseURL}`); // Method Get that containt Employee[], that is data from Users and the baseURL ( http://localhost:8080/api/v1/employees ).
  }

  // Method to create Employess in the db.
  createEmployee(employee: Employee): Observable<Object>{     // We define the variable " employee " that is the Object Employee.
    return this.httpClient.post(`${this.baseURL}`, employee); // Method Post to create Employees that containt the baseURL ( http://localhost:8080/api/v1/employees ) and object employee.
  }

  // Method to get Employees by ID ( just one)
  getEmployeeById(id: number): Observable<Employee>{          // Variable id: number = ID from Employees in the db.
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`); // Method Get that containt the object <Employee> and the baseURL ( http://localhost:8080/api/v1/employees ) with the ID from Employee that is located in our db.
  }

  // Method to update Employee with Put.
  updateEmployee(id: number, employee: Employee): Observable<Object>{ // Variable id (update by ID) and the object Employee with new information.
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);    // Method Put with the baseURL ( http://localhost:8080/api/v1/employees ), ID and the object employee with new information
  }

  // Method to delete Employee by ID
  deleteEmployee(id: number): Observable<Object>{                    // Variable ID (id from Employee)
    return this.httpClient.delete(`${this.baseURL}/${id}`);          // Method delete with the he baseURL ( http://localhost:8080/api/v1/employees ) and the ID from Employees in the db.
  }
  
  
}
