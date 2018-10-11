import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Source } from '../Models/Source';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Injectable()

export class SourceService {

  router: Router;
  constructor(protected http: HttpClient, private key: string, private url: string, public toastr: ToastrManager) {
  }

  public async GetAllStagingSources(): Promise<Source[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return await this.http.get<Source[]>(this.url + "/sources", { headers: header }).toPromise()

  }

  public async getStagingSource(MetricID: number): Promise<Source[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return await this.http.get<Source[]>(this.url + "/sources?ids=" + MetricID, { headers: header }).toPromise();
  }

  public async UpdateSource(source: Source, add: boolean): Promise<Source> {
     let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    var response = false;
    var body = JSON.stringify(source);
    return this.http.put<Source>(this.url + "/sources", body, { headers: header }).toPromise().then(response => {
      if (add) {
        this.toastr.successToastr(source.name + ' was added', 'Success!', { toastTimeout: 10000 });
      }
      else {
        this.toastr.successToastr(source.name + ' edit complete', 'Success!', { toastTimeout: 10000 });
      }
      
      return Promise.resolve(response);
    }).catch((error: HttpErrorResponse) => {
      if (error.status == 404) {
        this.toastr.errorToastr('Your session has expired! We had to log you out', 'Oops!', { toastTimeout: 10000 });
        this.router.navigate(['/login']);
      }
      else {
        if (add) {
          this.toastr.errorToastr('Add Failed with error: ' + error.message, 'Oops!', { toastTimeout: 10000 });
        }
        else {
          this.toastr.errorToastr('Edit Failed with error: ' + error.message, 'Oops!', { toastTimeout: 10000 });
        }
      }
      var s = new Source();
      s.id = -1;
      return Promise.resolve(new Source());
    });
  }

  public async DeleteSource(source: Source): Promise<Boolean> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    if (source.Metrics && source.Metrics.length > 0) {
      for (var i = 0; i < source.Metrics.length; i++)
      {
        await this.http.put<boolean>(this.url + "/metrics/" + source.Metrics[i] + "/RemoveSource/" + source.key + "?IncludeChildren=" + false, '', { headers: header }).toPromise();;
      }
      
    }
    return this.http.put(this.url + "/sources/remove/" + source.key , '', { headers: header }).toPromise()
      .then(response => {
        this.toastr.successToastr(source.name + ' was deleted', 'Success!', { toastTimeout: 10000 });
        var r = true
        return Promise.resolve(r);


      })
      .catch((error: HttpErrorResponse) => {
        this.toastr.errorToastr('Delete Failed with error: ' + error.message, 'Oops!', { toastTimeout: 10000 });
        var r = false;
        return Promise.resolve(r);
      });
  }

}
