import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EmployeeService {
  baseUrl = 'http://localhost:8080/';
  private apiServerUrl = environment;

  constructor(private http: HttpClient){}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl+`user/getlistusers`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl+`user/createupdateuser`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl+`user/createupdateuser`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl+`user/deleteuserbyid/${employeeId}`);
  }
}