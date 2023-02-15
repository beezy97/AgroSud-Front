import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, Service, Site } from '../data/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient){}
    public employeeEndPoint = "https://localhost:7011/api/Employee"
    public employeeUpdateEndPoint = "https://localhost:7011/api/Employee/"
    public employeeAddEndPoint = "https://localhost:7011/api/Employee"
    public employeeRemoveEndPoint = "https://localhost:7011/api/Employee/"
    public serviceEndPoint = "https://localhost:7011/api/Service"
    public siteEndPoint = "https://localhost:7011/api/Site"

    getEmployee():Observable<Employee[]> {
        return this.http.get<Employee[]>(this.employeeEndPoint);
    }
    getService():Observable<Service[]> {
        return this.http.get<Service[]>(this.serviceEndPoint);
    }

    getSite():Observable<Site[]> {
        return this.http.get<Site[]>(this.siteEndPoint);
    }
    updateEmployee(id:number, employee:Employee){
        return this.http.put(this.employeeUpdateEndPoint+id, employee);
    }

    addEmployee(employee: Employee){
        return this.http.post<Employee>(this.employeeAddEndPoint, employee);
    }

    removeEmployee(id:number){
        return this.http.delete(this.employeeRemoveEndPoint+id);
    }
}
