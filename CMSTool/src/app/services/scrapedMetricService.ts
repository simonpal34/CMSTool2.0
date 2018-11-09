import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Metric } from '../Models/Metric';
import { ServiceMaster } from './serviceMaster';
import { BaseService } from './baseService';

@Injectable()
export class ScrapedMetricService extends BaseService<Metric>{

  constructor(protected http: HttpClient, private auth: string, private BaseUrl: string, private service: ServiceMaster) {
    super(
      http,
      BaseUrl,
      auth,
      service);
  }

}
