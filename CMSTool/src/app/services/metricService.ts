import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Metric, ScrapedMetric } from '../Models/Metric';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable()
export class MetricService {


  constructor(protected http: HttpClient, private key: string, private url: string, public toastr: ToastrManager) {
  }
  getStagingEdit(id: string): Promise<Metric> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<Metric>(this.url + '/metrics/' + id + '/verbose', { headers: header }).toPromise();
  }
  getPublishedEdit(id: string): Promise<Metric> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<Metric>('http://usafacts-api.azurewebsites.net/api/v2/metrics/' + id, { headers: header }).toPromise().catch(error => {
      var m = new Metric();
      return Promise.resolve(m);
    });
  }

  getStagingMetricSearch(id: string): Promise<Metric[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<Metric[]>(this.url + '/metrics/verbose?ids=' + id, { headers: header }).toPromise();
  }
  getScraped(m: Metric): Promise<ScrapedMetric> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return this.http.get<ScrapedMetric>('http://pwbmscrapeddata1.azurewebsites.net/api/values/Usafactsmetric' + m.id, { headers: header }).toPromise();
  }

  stagingPost(m: Metric): Promise<Metric> {
    m.lexicon_name = m.name;
    var body = JSON.stringify(m);
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.put<Metric>(this.url + '/metrics/update/verbose', body, { headers: header }).toPromise().catch(error => {
      this.toastr.errorToastr('Edit Failed!', 'Oops!');
      var m = new Metric();
      m.id = -1;
      return Promise.resolve(m);
    });
  }

  publishMetric(m: Metric, includeChildren: boolean): Promise<boolean> {
    var body = '';
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.put<boolean>(this.url + '/metrics/publish/' + m.id + '?includeChildren=' + includeChildren, body, { headers: header }).toPromise().then(response => {
      this.toastr.successToastr(m.name + ' is published', 'Success');
      return Promise.resolve(true);
    }).catch(error => {
      
      this.toastr.errorToastr('Publish Failed!', 'Oops!');
      return Promise.resolve(false);
    })
  }
  

}
