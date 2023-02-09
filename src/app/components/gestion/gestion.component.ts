import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/data/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})

export class GestionComponent implements OnInit {

  employees: Employee[]=[]
  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  constructor(private employeeService: EmployeeService) {

  }
  updateEmployee(event){
    console.log("mon event",event);
    var employee = this.employees.find(x => x.id == event.key);
    console.log("mon produit", employee)

    employee.firstname = event.newData.firstname == undefined ? employee.firstname : event.newData.firstname
    employee.lastname = event.newData.lastname == undefined ? employee.lastname : event.newData.lastname
    employee.cellPhone = event.newData.cellPhone == undefined ? employee.cellPhone : event.newData.cellPhone
    employee.phone = event.newData.phone == undefined ? employee.phone : event.newData.phone
    employee.email = event.newData.email == undefined ? employee.email : event.newData.email


    this.employeeService.updateEmployee(event.key, employee).subscribe(resulat => {
      notify("Produit correctement modifié", "success", 500);

    });
  }

  addEmployee(event){
    console.log("new product", event);
    this.employeeService.addEmployee(event.data).subscribe(resulat => {
      notify("Produit correctement ajouté", "success", 500);
    });
  }

  removeEmployee(event){
    console.log("remove product", event);
    this.employeeService.removeEmployee(event.data.id).subscribe(resulat => {
      notify("Produit correctement supprimé", "success", 500);
    });
  }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(resultat => {
      this.employees = resultat;
     })
  }
}

function notify(arg0: string, arg1: string, arg2: number) {
  throw new Error('Function not implemented.');
}