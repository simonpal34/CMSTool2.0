import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpreadSheet, FileUpload } from '../Models/SpreadSheet';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { ServiceMaster } from './serviceMaster';

@Injectable()
export class UploadFileService {

  router: Router;
  constructor(protected http: HttpClient, private key: string, private url: string, public toastr: ToastrManager, public svc: ServiceMaster) {
  }
  getSpreadSheets(): Promise<SpreadSheet[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<SpreadSheet[]>(this.url + '/spreadsheets', { headers: header }).toPromise();
  }

  getUploaded(): Promise<FileUpload[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<FileUpload[]>(this.url + '/upload', { headers: header }).toPromise();
  }

  public async DoesFileUploadMetricExist(file: File): Promise<boolean> {
    let header = new HttpHeaders({ 'Authorization': this.key });
    var formData = new FormData();
    formData.append('uploadFile', file, file.name);
    return await this.http.post<boolean>(this.url + '/upload/DoesExist/Template', formData, { headers: header }).toPromise().then(
      response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        var e = new Error();
        e = error;
        var r = true;  //how to handle the error
        this.toastr.errorToastr('An Error: ' + e.message + ' has occured while processing ' + file.name + ' !', 'Oops!', { toastTimeout: 10000 });
        return Promise.resolve(r);
      });
  }

  public async UploadFile(file: File, type: SpreadSheet): Promise<FileUpload> {
    let header = new HttpHeaders({ 'Authorization': this.key });
    var formData = new FormData();
    formData.append('uploadFile', file, file.name);
    var sheet = type.SheetName.replace('.', '_');
    return await this.http.post<FileUpload>('https://usafacts-api-staging.azurewebsites.net/api/v3/upload/uploadSpreadsheet/' + sheet, formData, { headers: header }).toPromise().then(
      response => {
        return Promise.resolve(response);
      }).catch((error: HttpErrorResponse) => {
        var r = new FileUpload();
        r.name = 'fail';
        if (error.status == 401) {
          this.toastr.errorToastr('Your session has expired! We had to log you out', 'Oops!', { toastTimeout: 10000 });
          
          this.svc.logout().then(d => {
            if (!d) {
              this.router.navigate(['login']);
            }
          });

          return Promise.resolve(r);
        }
        else {
          
          this.toastr.errorToastr('An Error: ' + error.message + ' has occured while processing ' + file.name + ' !', 'Oops!', { toastTimeout: 10000 });
          return Promise.resolve(r);
        }

      });
  }
  

}
