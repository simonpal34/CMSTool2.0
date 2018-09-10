import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Metric } from '../Models/Metric';

@Injectable()
export class MissionService {


  constructor(protected http: HttpClient, private key: string, private url : string) {
  }
  getStagingMissions(): Promise<Metric[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<Metric[]>(this.url + '/missions', { headers: header }).toPromise();
  }
  

}
