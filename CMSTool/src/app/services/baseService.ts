import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Base } from '../Models/Base';
import { Serializer } from './Serializer';
import { ServiceMaster } from './serviceMaster';


export class BaseService<T extends Base> {
  serializer: Serializer
  constructor(
    private httpClient: HttpClient,
    private url: string,
    private key: string,
    private svc: ServiceMaster) {
    this.serializer = null;
  } 

  public create(item: T, endpoint: string): Promise<T> {
    return this.httpClient
      .post<T>(`${this.url}/${endpoint}`, this.serializer.toJson(item))
      .toPromise().then(data => this.serializer.fromJson(data) as T);
  }

  public update(item: T, endpoint: string): Promise<T> {
    return this.httpClient
      .put<T>(`${this.url}/${endpoint}/${item.id}`,item)
      .toPromise();
  }

  read(id: string, version: String, endpoint: string): Promise<T> {
    this.svc.timeLeft = 300;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.httpClient.get<T>(`${this.url}/${version}/${endpoint}/${id}`, { headers: header }).toPromise().catch(error => {
      var m: T;
      return Promise.resolve(m);
    });
  }

  readVerbose(id: string, version: String, endpoint: string): Promise<T> {
    this.svc.timeLeft = 300;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.httpClient.get<T>(`${this.url}/${version}/${endpoint}/${id}/verbose`, { headers: header }).toPromise();
  }

  listAll(version: string, endpoint: string): Promise<T[]> {
    this.svc.timeLeft = 300;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });

    return this.httpClient.get<T[]>(`${this.url}/${version}/${endpoint}`, { headers: header }).toPromise();
  }

  list(queryOptions: T, endpoint: string): Promise<T[]> {
    return this.httpClient
      .get(`${this.url}/${endpoint}`)
      .toPromise().then((data: any) => this.convertData(data.items));
  }

  delete(id: number, endpoint: string) {
    return this.httpClient
      .delete(`${this.url}/${endpoint}/${id}`);
  }

  private convertData(data: any): T[] {
    return data.map(item => this.serializer.fromJson(item));
  }
}
