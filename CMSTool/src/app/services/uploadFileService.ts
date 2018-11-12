import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SpreadSheet, FileUpload } from '../Models/SpreadSheet';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { ServiceMaster } from './serviceMaster';
import { BaseService } from './baseService';

@Injectable()
export class UploadFileService extends BaseService<FileUpload> {

  router: Router;
  constructor(protected http: HttpClient, private auth: string, private BaseUrl: string, private service: ServiceMaster, public toastr: ToastrManager) {
    super(
      http,
      BaseUrl,
      auth,
      service);
  }
  getSpreadSheets(): Promise<SpreadSheet[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.auth });

    return this.http.get<SpreadSheet[]>('https://usafacts-api-staging.azurewebsites.net/api/v2' + '/spreadsheets', { headers: header }).toPromise();
  }

  public async DoesFileUploadMetricExist(file: File): Promise<boolean> {
    let header = new HttpHeaders({ 'Authorization': this.auth });
    var formData = new FormData();
    formData.append('uploadFile', file, file.name);
    return await this.http.post<boolean>('https://usafacts-api-staging.azurewebsites.net/api/v2' + '/upload/DoesExist/Template', formData, { headers: header }).toPromise().then(
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

  

}
