import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReportingUnit } from '../Models/ReportingUnit';

@Injectable()
export class ReportingUnitService {


  constructor(protected http: HttpClient, private key: string, private url : string) {
  }


  public getStagingReportingUnitBreadcrumb(id: string): Promise<ReportingUnit> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.http.get<ReportingUnit>(this.url + '/ReportingUnits/' + id, { headers: header }).toPromise();
  }
}
