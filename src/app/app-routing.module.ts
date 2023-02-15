import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { GestionSiteComponent } from './components/gestion-site/gestion-site.component';
import { GestionServiceComponent } from './components/gestion-service/gestion-service.component';
import { VisiteurComponent } from './components/visiteur/visiteur.component';

const routes: Routes = [
  {
    path:'',
    component:VisiteurComponent
  },
  {
    path:'admin',
    component:ConnexionComponent
  },
  {
    path:'gestion',
    component:GestionComponent
  },
  {
    path:'site',
    component:GestionSiteComponent
  },
  {
    path:'service',
    component:GestionServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
