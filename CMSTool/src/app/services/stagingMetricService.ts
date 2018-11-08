import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Metric} from '../Models/Metric';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceMaster } from './serviceMaster';
import { BaseService } from './baseService';

@Injectable()
export class StagingMetricService extends BaseService<Metric>{

  fileUrl;
  sanitizer: DomSanitizer
  constructor(protected http: HttpClient, private auth: string, private BaseUrl: string, private service: ServiceMaster, public toastr: ToastrManager) {
    super(
      http,
      BaseUrl,
      auth,
      service);
  }



  async publishMetric(m: Metric, includeChildren: boolean): Promise<Metric> {
    var body = '';
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.auth });

    return this.http.put<Metric>('https://usafacts-api-staging.azurewebsites.net/api/v2' + '/metrics/publish/' + m.id + '?includeChildren=' + includeChildren, body, { headers: header }).toPromise().then(response => {
      this.toastr.successToastr(m.name + ' is published', 'Success', { toastTimeout: 10000 });
      return Promise.resolve(response);
    }).catch(error => {

      this.toastr.errorToastr('Publish Failed!', 'Oops!', { toastTimeout: 10000 });
      return Promise.resolve(null);
    });
  }

  async exportMetric(m: Metric, spinner: NgxSpinnerService) {
    let header = new HttpHeaders({ 'Content-Type': 'application/octet-stream', 'Authorization': this.auth });
    this.service.timeLeft = 600;

    return this.http.get('https://usafacts-api-staging.azurewebsites.net/api/v2' + '/metrics/' + m.id + '/export', { headers: header, responseType: 'blob' }).subscribe(response => {
      this.toastr.successToastr(m.name + ' exported. Download in progress', 'Success', { toastTimeout: 10000 });
      spinner.hide();
      var url = window.URL.createObjectURL(response);
      var a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = m.id + "_" + m.name + ".xlsx";
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
