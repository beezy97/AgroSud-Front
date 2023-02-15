import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Site } from '../data/employee.model';

@Injectable({
  providedIn: 'root'
})
export class GestionSiteService {

  constructor(private http: HttpClient){}
  public siteEndPoint = "https://localhost:7011/api/Site"
   public siteUpdateEndPoint = "https://localhost:7011/api/Site/"
   public siteAddEndPoint = "https://localhost:7011/api/Site"
   public siteRemoveEndPoint = "https://localhost:7011/api/Site/"
 


  getSite():Observable<Site[]> {
      return this.http.get<Site[]>(this.siteEndPoint);
  }
  updateSite(id:number, site:Site){
      return this.http.put(this.siteUpdateEndPoint+id, site);
  }

  addSite(site: Site){
      return this.http.post<Site>(this.siteAddEndPoint, site);
  }

  removeSite(id:number){
      return this.http.delete(this.siteRemoveEndPoint+id);
  }
}
