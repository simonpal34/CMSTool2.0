import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../Models/Profile';
import { LoginService } from './LoginService';
import { MissionService } from './missionService';
import { Mission } from '../Models/Mission';
import { ReportingUnit } from '../Models/ReportingUnit';
import { Topic } from '../Models/Topic';
import { Metric } from '../Models/Metric';

@Injectable()
export class ServiceMaster {
  loginService: LoginService;
  missionService: MissionService;
  authCode: string;
  stagingUrl = 'http://usafacts-api-staging.azurewebsites.net/api/v2';
  stagingMissions: Mission[];
  stagingReportingUnits: ReportingUnit[];
  stagingTopics: Topic[];
  missionBreadCrumb: Mission;
  reportingUnitBreadCrumb: ReportingUnit;
  stagingMetrics: Metric[];
  constructor(protected http: HttpClient) {
    this.loginService = new LoginService(http);
    var r = new ReportingUnit();
    r.id = -1;
    this.stagingReportingUnits = [r];
    this.reportingUnitBreadCrumb = r;
    var t = new Topic();
    t.id = -1;
    this.stagingTopics = [t];
    var miss = new Mission();
    miss.id = -1;
    this.stagingMissions = [miss];
    this.missionBreadCrumb = miss;
    var met = new Metric;
    met.id = -1;
    this.stagingMetrics = [met];
  }

  getAuthCode() {
    this.authCode = 'Basic ' + this.loginService.profile.SessionId;
    this.missionService = new MissionService(this.http, this.authCode, this.stagingUrl);
    this.getMissions();
    

  }

  getMissions() {
    var r = new ReportingUnit();
    r.id = -1;
    this.stagingReportingUnits = [r];
    var t = new Topic();
    t.id = -1;
    this.stagingTopics = [t];
    var met = new Metric;
    met.id = -1;
    this.stagingMetrics = [met];
    this.missionBreadCrumb.id = -1
    this.reportingUnitBreadCrumb.id = -1;
    this.missionService.getStagingMissions().then(response => {
      response.forEach(r => {
        r.applicationType = 1;
      });
      this.stagingMissions = response;
      this.missionService.getStagingPopulationMissions().then(response => {
        response.forEach(r => {
          r.applicationType = 4;
        });
        this.stagingMissions = this.stagingMissions.concat(response);
      });
    });
  }

  getReportingUnits() {
    var t = new Topic();
    t.id = -1;
    this.stagingTopics = [t];
    var m = new Mission()
    m.id = -1;
    var met = new Metric;
    met.id = -1;
    this.stagingMetrics = [met];
    this.missionBreadCrumb = m;
    if (this.stagingMissions.length == 1) {
      if (this.stagingMissions[0].applicationType == 1) {
        
        this.stagingReportingUnits = this.stagingMissions[0].reporting_units;
      }
    }
    else {
      console.log("Error getting reporting units");
    }
    
  }

  getTopics() {
    var miss = new Mission();
    miss.id = -1;
    var met = new Metric;
    met.id = -1;
    this.stagingMetrics = [met];
    this.missionBreadCrumb = this.stagingMissions[0];
    this.stagingMissions = [miss];
    this.stagingTopics = this.stagingReportingUnits[0].topics;
  }

  trendToMetrics() {
    var r = new ReportingUnit();
    r.id = -1;
    this.reportingUnitBreadCrumb = this.stagingReportingUnits[0];
    this.stagingReportingUnits = [r];
    this.stagingMetrics = this.stagingTopics[0].metrics;
  }

}
