import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../Models/Mission';
import { BaseService } from './baseService';
import { ServiceMaster } from './serviceMaster';


@Injectable()
export class PopulationService extends BaseService<Mission>{


  constructor(protected http: HttpClient, private auth: string, private BaseUrl: string, private service: ServiceMaster) {
    super(
      http,
      BaseUrl,
      auth,
      service);
  }
}
