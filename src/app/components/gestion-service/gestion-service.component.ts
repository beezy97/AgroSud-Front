import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Service } from 'src/app/data/employee.model';
import { GestionServiceService } from 'src/app/services/gestion-service.service';

@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.scss']
})
export class GestionServiceComponent {
  
  services: Service[];
  
  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  constructor(private gestionServiceService: GestionServiceService) {

  }
  updateService(event){
    console.log("mon event",event);
    var service = this.services.find(x => x.id == event.key);
    console.log("mon produit", service)

  
    service.name = event.newData.service == undefined ? service.name : event.newData.service



    this.gestionServiceService.updateService(event.key, service).subscribe(resulat => {
      notify("Informations correctement modifié", "success", 500);

    });
  }

  addService(event){
    console.log("new product", event);
    this.gestionServiceService.addService(event.data).subscribe(resulat => {
      notify("Site correctement ajouté", "success", 500);
    });
  }

  removeService(event){
    console.log("remove product", event);
    this.gestionServiceService.removeService(event.data.id).subscribe(resulat => {
      notify("Site correctement supprimé", "success", 500);
    });
  }

  ngOnInit(): void {
    this.gestionServiceService.getService().subscribe(resultat => {
      this.services = resultat;
    })
     
     }
}

