import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../data/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient){}
    public employeeEndPoint = "https://localhost:7011/api/Employee"
    public employeeUpdateEndPoint = "https://localhost:7011/api/Employee/" 
    public employeeAddEndPoint = "https://localhost:7011/api/Employee"
    public employeeRemoveEndPoint = "https://localhost:7011/api/Employee/"

    getEmployee():Observable<Employee[]> {
        return this.http.get<Employee[]>(this.employeeEndPoint);
    }

    updateEmployee(id:number, employee:Employee){
        return this.http.put(this.employeeUpdateEndPoint+id, employee);
    }

    addEmployee(employee: Employee){
        return this.http.post<Employee>(this.employeeAddEndPoint, employee);
    }

    removeEmployee(id:number){
        return this.http.delete(this.employeeUpdateEndPoint+id);
    }
}
