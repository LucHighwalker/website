import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Project {
  private clientUrl = '/assets/JSON/projects.json';

  private headers = new Headers({ Accept: 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  public projectSelected = new Subject<number>();

  private idCounter = -1;

  constructor(private http: Http) {}

  getJSON(): Observable<any> {
    return this.http.get(this.clientUrl, this.options).map(res => res);
  }

  assignID() {
    this.idCounter++;
    return this.idCounter;
  }

  expandProject(projID: number) {
    this.projectSelected.next(projID);
  }

  closeProjects() {
    this.projectSelected.next(-1);
  }
}
