import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Source } from '../Models/Source';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { BaseService } from './baseService';
import { ServiceMaster } from './serviceMaster';

@Injectable()

export class SourceService extends BaseService<Source> {

  router: Router;
  constructor(protected http: HttpClient, private auth: string, private BaseUrl: string, private service: ServiceMaster, public toastr: ToastrManager) {
    super(
      http,
      BaseUrl,
      auth,
      service);
  }


  public async DeleteSource(source: Source): Promise<Boolean> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.auth });
    if (source.Metrics && source.Metrics.length > 0) {
      for (var i = 0; i < source.Metrics.length; i++)
      {
        await this.http.put<boolean>('https://usafacts-api-staging.azurewebsites.net/api/v2' + "/metrics/" + source.Metrics[i] + "/RemoveSource/" + source.key + "?IncludeChildren=" + false, '', { headers: header }).toPromise();;
      }
      
    }
    return this.delete( "v2", "sources/remove/" + source.key).then(response => {
      if (response) {
        var r = true
        return Promise.resolve(r);
      }
      else {
        var r = false;
        return Promise.resolve(r);
      }
    })
  }

}
