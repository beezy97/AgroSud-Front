import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DxDataGridModule } from 'devextreme-angular';
import { EmployeeService } from './services/employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GestionSiteComponent } from './components/gestion-site/gestion-site.component';
import { GestionServiceComponent } from './components/gestion-service/gestion-service.component';
import { VisiteurComponent } from './components/visiteur/visiteur.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    ConnexionComponent,
    NavbarComponent,
    GestionSiteComponent,
    GestionServiceComponent,
    VisiteurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
