import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DxDataGridModule } from 'devextreme-angular';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    ConnexionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
