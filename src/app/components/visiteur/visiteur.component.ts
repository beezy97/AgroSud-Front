import { Component } from '@angular/core';
import { Employee, Service, Site } from 'src/app/data/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-visiteur',
  templateUrl: './visiteur.component.html',
  styleUrls: ['./visiteur.component.scss']
})
export class VisiteurComponent {
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

