import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mission } from '../Models/Mission';

@Injectable()
export class MissionService {


  constructor(protected http: HttpClient, private key: string, private url : string) {
  }
  getStagingMissions(): Promise<Mission[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<Mission[]>(this.url + '/missions', { headers: header }).toPromise();
  }
  public getStagingPopulationMissions(): Promise<Mission[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return this.http.get<Mission[]>(this.url + '/population', { headers: header }).toPromise();
  }

}
