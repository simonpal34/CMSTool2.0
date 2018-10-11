import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Metric, ScrapedMetric, ScrapedData } from '../Models/Metric';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class MetricService {

  fileUrl;
  sanitizer: DomSanitizer
  constructor(protected http: HttpClient, private key: string, private url: string, public toastr: ToastrManager) {
  }
  getStagingEdit(id: string): Promise<Metric> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<Metric>(this.url + '/metrics/' + id + '/verbose', { headers: header }).toPromise();
  }
  getPublishedEdit(m: Metric): Promise<Metric> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    if (m.LastPushedIntoProduction) {
      return this.http.get<Metric>('https://usafacts-api.azurewebsites.net/api/v2/metrics/' + m.id, { headers: header }).toPromise().catch(error => {
        var m = new Metric();
        return Promise.resolve(m);
      });
    }
    else {
      var m = new Metric();
      return Promise.resolve(m);
    }
    
  }

  getStagingMetricSearch(id: string): Promise<Metric[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<Metric[]>(this.url + '/metrics/verbose?ids=' + id, { headers: header }).toPromise();
  }
  getScraped(m: Metric): Promise<ScrapedMetric> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return this.http.get<ScrapedMetric>('https://pwbmscrapeddata1.azurewebsites.net/api/values/Usafactsmetric' + m.id, { headers: header }).toPromise().catch(error => {
      var m = new ScrapedMetric();
      return Promise.resolve(m);
    });
  }

  stagingPost(m: Metric): Promise<Metric> {
    m.lexicon_name = m.name;
    var body = JSON.stringify(m);
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.put<Metric>(this.url + '/metrics/update/verbose', body, { headers: header }).toPromise().then(response => {
      return Promise.resolve(response);
    }).catch((error: HttpErrorResponse) => {
      if (error.status == 404) {
        this.toastr.errorToastr('Your session has expired! We had to log you out', 'Oops!', { toastTimeout: 10000 });
        var m = new Metric();
        m.id = -5;
        return Promise.resolve(m);
      }
      else {
        this.toastr.errorToastr('Edit Failed with error: ' + error.message, 'Oops!', { toastTimeout: 10000 });
        var m = new Metric();
        m.id = -1;
        return Promise.resolve(m);
      }
      
    });
  }

  async publishMetric(m: Metric, includeChildren: boolean): Promise<Metric> {
    var body = '';
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.put<Metric>(this.url + '/metrics/publish/' + m.id + '?includeChildren=' + includeChildren, body, { headers: header }).toPromise().then(response => {
      this.toastr.successToastr(m.name + ' is published', 'Success', { toastTimeout: 10000 });
      return Promise.resolve(response);
    }).catch(error => {

      this.toastr.errorToastr('Publish Failed!', 'Oops!', { toastTimeout: 10000 });
      return Promise.resolve(null);
    });
  }

  async exportMetric(m: Metric, spinner: NgxSpinnerService) {
    let header = new HttpHeaders({ 'Content-Type': 'application/octet-stream', 'Authorization': this.key });


    return this.http.get(this.url + '/metrics/' + m.id + '/export', { headers: header, responseType: 'blob' }).subscribe(response => {
      this.toastr.successToastr(m.name + ' exported. Download in progress', 'Success', { toastTimeout: 10000 });
      spinner.hide();
      var url = window.URL.createObjectURL(response);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = m.id + "_" + m.name + ".xls";
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove(); 
      var url = window.URL.createObjectURL(response);
    },error => {
      var err = new Error();
      err = error;
      this.toastr.errorToastr('Export failed with error: ' + err.message, 'Oops!', { toastTimeout: 10000 });
      return null;
    });
  }
}
