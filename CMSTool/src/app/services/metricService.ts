import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Metric, ScrapedMetric } from '../Models/Metric';

@Injectable()
export class MetricService {


  constructor(protected http: HttpClient, private key: string, private url : string) {
  }
  getStagingEdit(id: string): Promise<Metric> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<Metric>(this.url + '/metrics/' + id + '/verbose', { headers: header }).toPromise();
  }

  getStagingMetricSearch(id: string): Promise<Metric[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<Metric[]>(this.url + '/metrics/verbose?ids=' + id, { headers: header }).toPromise();
  }
  getScraped(m: Metric): Promise<ScrapedMetric> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return this.http.get<ScrapedMetric>('http://pwbmscrapeddata1.azurewebsites.net/api/values/Usafactsmetric' + m.id, { headers: header }).toPromise();
  }
  

}
