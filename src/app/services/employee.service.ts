import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseUrl = `${environment.apiUrl}/Employees`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/GetAllEmployees`);
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/GetEmployeeById/${id}`);
  }

  create(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/CreateEmployee`, employee);
  }

  update(id: number, employee: Employee): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/UpdateEmployee/${id}`, employee);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/DeleteEmployee/${id}`);
  }
}
