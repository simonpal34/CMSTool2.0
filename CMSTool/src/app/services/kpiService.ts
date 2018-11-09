import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Metric } from '../Models/Metric';
import { BaseService } from './baseService';
import { ServiceMaster } from './serviceMaster';

@Injectable()
export class KPIService extends BaseService<Metric> {


  constructor(protected http: HttpClient, private auth: string, private BaseUrl: string, private service: ServiceMaster) {
    super(
      http,
      BaseUrl,
      auth,
      service);
  }

}
