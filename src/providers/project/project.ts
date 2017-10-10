import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjectProvider {

  constructor(public http: Http) {
    
  }
  getProjectContent(projectID){
    let url = `assets/projects-content/${projectID}.html`
    return this.http.get(url).map(res=>res.text())
  }

}
