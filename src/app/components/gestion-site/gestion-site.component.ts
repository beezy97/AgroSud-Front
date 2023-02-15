import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Site } from 'src/app/data/employee.model';
import { GestionSiteService } from 'src/app/services/gestion-site.service';

@Component({
  selector: 'app-gestion-site',
  templateUrl: './gestion-site.component.html',
  styleUrls: ['./gestion-site.component.scss']
})
export class GestionSiteComponent {

  sites: Site[];
  
  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  constructor(private gestionSiteService: GestionSiteService) {

  }
  updateSite(event){
    console.log("mon event",event);
    var site = this.sites.find(x => x.id == event.key);
    console.log("mon produit", site)

  
    site.city = event.newData.site == undefined ? site.city : event.newData.site



    this.gestionSiteService.updateSite(event.key, site).subscribe(resulat => {
      notify("Informations correctement modifié", "success", 500);

    });
  }

  addSite(event){
    console.log("new product", event);
    this.gestionSiteService.addSite(event.data).subscribe(resulat => {
      notify("Site correctement ajouté", "success", 500);
    });
  }

  removeSite(event){
    console.log("remove product", event);
    this.gestionSiteService.removeSite(event.data.id).subscribe(resulat => {
      notify("Site correctement supprimé", "success", 500);
    });
  }

  ngOnInit(): void {
    this.gestionSiteService.getSite().subscribe(resultat => {
      this.sites = resultat;
    })
     
     }
}
