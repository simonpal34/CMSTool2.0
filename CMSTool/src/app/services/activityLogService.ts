import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivityLog } from '../Models/ActivityLog';
import { BaseService } from './baseService';
import { ServiceMaster } from './serviceMaster';

@Injectable()
export class ActivityLogService extends BaseService<ActivityLog> {


  constructor(protected http: HttpClient, private auth: string, private BaseUrl: string, private service: ServiceMaster) {
    super(
      http,
      BaseUrl,
      auth,
      service);
  }


}
