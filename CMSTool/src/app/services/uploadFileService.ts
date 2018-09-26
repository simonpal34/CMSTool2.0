import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpreadSheet, FileUpload } from '../Models/SpreadSheet';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable()
export class UploadFileService {


  constructor(protected http: HttpClient, private key: string, private url: string, public toastr: ToastrManager) {
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
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    var formData = new FormData();
    formData.append('uploadFile', file, file.name);
    return await this.http.post<boolean>(this.url + '/upload/DoesExist/Template', formData, { headers: header }).toPromise().then(
      response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        var r = true;  //how to handle the error
        this.toastr.errorToastr('An Error: ' + error.ExceptionMessage + ' has occured while processing ' + file.name + ' !', 'Oops!');
        return Promise.resolve(r);
      });
  }
  
  

}
