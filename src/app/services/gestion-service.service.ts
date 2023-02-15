import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../data/employee.model';

@Injectable({
  providedIn: 'root'
})
export class GestionServiceService {
  constructor(private http: HttpClient){}
  public serviceEndPoint = "https://localhost:7011/api/Service"
   public serviceUpdateEndPoint = "https://localhost:7011/api/Service/"
   public serviceAddEndPoint = "https://localhost:7011/api/Service"
   public serviceRemoveEndPoint = "https://localhost:7011/api/Service/"
 


  getService():Observable<Service[]> {
      return this.http.get<Service[]>(this.serviceEndPoint);
  }
  updateService(id:number, site:Service){
      return this.http.put(this.serviceUpdateEndPoint+id, site);
  }

  addService(site: Service){
      return this.http.post<Service>(this.serviceAddEndPoint, site);
  }

  removeService(id:number){
      return this.http.delete(this.serviceRemoveEndPoint+id);
  }
}
