import { Component, OnInit } from '@angular/core';
import { Employee, Service, Site } from 'src/app/data/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})

export class GestionComponent implements OnInit {

  employees: Employee[]=[]
  services: Service[];
  sites: Site[];
  
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

    employee.firstName = event.newData.firstName == undefined ? employee.firstName : event.newData.firstName
    employee.lastName = event.newData.lastName == undefined ? employee.lastName : event.newData.lastName
    employee.cellPhone = event.newData.cellPhone == undefined ? employee.cellPhone : event.newData.cellPhone
    employee.phone = event.newData.phone == undefined ? employee.phone : event.newData.phone
    employee.email = event.newData.email == undefined ? employee.email : event.newData.email

    employee.siteId = event.newData.siteId == undefined ? employee.siteId : event.newData.siteId
    employee.serviceId = event.newData.serviceId == undefined ? employee.serviceId : event.newData.serviceId

    this.employeeService.updateEmployee(event.key, employee).subscribe(resulat => {
      notify("Informations correctement modifié", "success", 500);

    });
  }

  addEmployee(event){
    console.log("new product", event);
    this.employeeService.addEmployee(event.data).subscribe(resulat => {
      notify("Employee correctement ajouté", "success", 500);
    });
  }

  removeEmployee(event){
    console.log("remove product", event);
    this.employeeService.removeEmployee(event.data.id).subscribe(resulat => {
      notify("Employee correctement supprimé", "success", 500);
    });
  }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(resultat => {
      this.employees = resultat;
    })
      this.employeeService.getService().subscribe(resultat => {
        this.services = resultat;
      });
  
      this.employeeService.getSite().subscribe(resultat => {
        this.sites = resultat;
      });
     }
  }
