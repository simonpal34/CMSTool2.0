import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Source } from '../Models/Source';

@Injectable()

export class SourceService {


  constructor(protected http: HttpClient, private key: string, private url: string) {
  }

  public async GetAllStagingSources(): Promise<Source[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return await this.http.get<Source[]>(this.url + "/sources", { headers: header }).toPromise()

  }

  public async getStagingSource(MetricID: number): Promise<Source[]> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return await this.http.get<Source[]>(this.url + "/sources?ids=" + MetricID, { headers: header }).toPromise();
  }

  public async UpdateSource(source: Source): Promise<Source> {
     let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    var response = false;
    var body = JSON.stringify(source);
    return this.http.put<Source>(this.url + "/sources", body, { headers: header }).toPromise();
  }

  public async DeleteSource(source: Source): Promise<Boolean> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    var response = false;
    return this.http.put(this.url + "/sources/remove/" + source.key , '', { headers: header }).toPromise()
      .then(response => {
        var r = true
        return Promise.resolve(r);


      })
      .catch(error => {
        var r = false;
        return Promise.resolve(r);
      });
  }

}
