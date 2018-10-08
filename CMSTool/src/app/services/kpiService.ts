import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Metric, ScrapedMetric } from '../Models/Metric';
import { ActivityLog } from '../Models/ActivityLog';

@Injectable()
export class KPIService {


  constructor(protected http: HttpClient, private key: string, private url : string) {
  }

  getModified(): Promise<Metric[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<Metric[]>(this.url + '/kpi/lastmodified', { headers: header }).toPromise();
  }

  getPublished(): Promise<Metric[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<Metric[]>(this.url + '/kpi/lastpublished', { headers: header }).toPromise();
  }

  getActivityLog(): Promise<ActivityLog[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<ActivityLog[]>(this.url + '/kpi/ActivityLog', { headers: header }).toPromise();
  }
}
