import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Base } from '../Models/Base';
import { ServiceMaster } from './serviceMaster';
import { Toastr, ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';


export class BaseService<T extends Base> {
  toastr: ToastrManager;
  router: Router;
  constructor(
    private httpClient: HttpClient,
    private url: string,
    private key: string,
    private svc: ServiceMaster) {
  } 

  public updateWithOptions(item: T, queryOptions: string, version: string, endpoint: string): Promise<T> {
    this.svc.timeLeft = 600;
    var body = '';
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return this.httpClient.post<T>(`${this.url}/${version}/${endpoint}?${queryOptions} `, body, { headers: header }).toPromise().catch(error => {
      var m: T;
      m.id = "-1";
      return Promise.resolve(m);
    });;
  }
  public upload(item: any, version: string, endpoint: string): Promise<T> {
    this.svc.timeLeft = 600;
    let header = new HttpHeaders({'Authorization': this.key });
    return this.httpClient.post<T>(`${this.url}/${version}/${endpoint}`, item, { headers: header }).toPromise().catch((error: HttpErrorResponse) => {
      if (error.status == 401) {
        this.toastr.errorToastr('Your session has expired! We had to log you out', 'Oops!', { toastTimeout: 10000 });
        var m: T;
        m.id = "-5";
        this.svc.logout().then(d => {
          if (!d) {
            this.router.navigate(['/login']);
          }
        });
        return Promise.resolve(m);

      }
      else {
        var m: T;
        m.id = "-1";
        return Promise.resolve(m);
      }

    });
  }

  public update(item: T,version: string, endpoint: string): Promise<T> {
    this.svc.timeLeft = 600;
    var body = JSON.stringify(item);
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return this.httpClient.put<T>(`${this.url}/${version}/${endpoint}`, body, { headers: header }).toPromise().catch((error: HttpErrorResponse) => {
      if (error.status == 401) {
        this.toastr.errorToastr('Your session has expired! We had to log you out', 'Oops!', { toastTimeout: 10000 });
        var m :T;
        m.id = "-5";
        this.svc.logout().then(d => {
          if (!d) {
            this.router.navigate(['/login']);
          }
        });
        return Promise.resolve(m);
        
      }
      else {
        var m: T;
        m.id = "-1";
        return Promise.resolve(m);
      }

    });
  }

  read(id: string, version: String, endpoint: string): Promise<T> {
    this.svc.timeLeft = 600;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.httpClient.get<T>(`${this.url}/${version}/${endpoint}/${id}`, { headers: header }).toPromise().catch(error => {
      var m: T;
      return Promise.resolve(m);
    });
  }

  readVerbose(id: string, version: String, endpoint: string): Promise<T> {
    this.svc.timeLeft = 600;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.httpClient.get<T>(`${this.url}/${version}/${endpoint}/${id}/verbose`, { headers: header }).toPromise();
  }

  listAll(version: string, endpoint: string): Promise<T[]> {
    this.svc.timeLeft = 600;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.httpClient.get<T[]>(`${this.url}/${version}/${endpoint}`, { headers: header }).toPromise();
  }

  search(queryOptions: string, version: string, endpoint: string): Promise<T[]> {
    this.svc.timeLeft = 600;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return this.httpClient.get<T[]>(`${this.url}/${version}/${endpoint}?${queryOptions}`, { headers: header }).toPromise();
  }

  delete(version: string, endpoint: string): Promise<boolean> {
    this.svc.timeLeft = 600;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    return this.httpClient.put<T>(`${this.url}/${version}/${endpoint}`, '', { headers: header }).toPromise().then(data => {
      return Promise.resolve(true);
    }) .catch((error: HttpErrorResponse) => {
      if (error.status == 401) {
        this.toastr.errorToastr('Your session has expired! We had to log you out', 'Oops!', { toastTimeout: 10000 });
        this.svc.logout().then(d => {
          if (!d) {
            this.router.navigate(['/login']);
          }
        });
        return Promise.resolve(false);

      }
      else {
        var m: T;
        m.id = "-1";
        return Promise.resolve(false);
      }

    });
  }

}
