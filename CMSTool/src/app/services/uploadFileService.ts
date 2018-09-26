import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpreadSheet, FileUpload } from '../Models/SpreadSheet';

@Injectable()
export class UploadFileService {


  constructor(protected http: HttpClient, private key: string, private url : string) {
  }
  getSpreadSheets(): Promise<SpreadSheet[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<SpreadSheet[]>(this.url + '/spreadsheets', { headers: header }).toPromise();
  }
  getUploaded(): Promise<FileUpload[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<FileUpload[]>(this.url + '/upload', { headers: header }).toPromise();
  }

  
  

}
