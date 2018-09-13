import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
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
import { Metric, ScrapedMetric, ChartData } from '../Models/Metric';
import { MetricService } from './metricService';
import { ReportingUnitService } from './reportingUnitService';
import { EditMetricDialogComponent } from '../components/MetricTable/edit-metric-dialog.component';


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
  metricService: MetricService;
  metricEdit: Metric;
  reportingUnitService: ReportingUnitService;
  scrapedMetric: ScrapedMetric;
  data: ChartData;
  constructor(protected http: HttpClient, public dialog: MatDialog) {
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
    this.metricService = new MetricService(this.http, this.authCode, this.stagingUrl);
    this.reportingUnitService = new ReportingUnitService(this.http, this.authCode, this.stagingUrl);
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
    var r = new ReportingUnit();
    r.id = -1;
    this.reportingUnitBreadCrumb = r;
    if (this.stagingMissions.length == 1) {
      if (this.stagingMissions[0].applicationType == 1) {
        
        this.stagingReportingUnits = this.stagingMissions[0].reporting_units;
      }
      if (this.stagingMissions[0].applicationType == 4) {
        var m = this.stagingMissions[0];
        this.searchStaging(this.stagingMissions[0].metrics.toString());
        this.stagingMissions[0] = m;
        
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
    if (this.missionBreadCrumb.id == -1) {
      this.missionBreadCrumb = this.stagingMissions[0];
    }
    var r = new ReportingUnit();
    r.id = -1;
    this.reportingUnitBreadCrumb = r;
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

  getMetricEdit(metric: Metric) {
    this.metricService.getStagingEdit(metric.id.toString()).then(response => {
      this.metricEdit = response;
      this.metricService.getScraped(response).then(r => {
        this.scrapedMetric = r
      })
      this.data = { metric : this.metricEdit, scraped : this.scrapedMetric}
      let dialogRef = this.dialog.open(EditMetricDialogComponent,
        {
          panelClass: 'mat-dialog-lg',
          data: this.data,
          width: '75%',
          height: '75%',
          
        });
    });
    
  
  }

  searchStaging(id: string) {
    var t = new Topic();
    t.id = -1;
    this.stagingTopics = [t];
    var m = new Mission()
    m.id = -1;
    this.stagingMissions = [m];
    var r = new ReportingUnit();
    r.id = -1;
    this.stagingReportingUnits = [r];
    this.missionBreadCrumb = m;
    this.reportingUnitBreadCrumb = r;
    this.metricService.getStagingMetricSearch(id).then(response => {
      if (response.length == 0) {
        var m = new Metric();
        m.id = -2;
        m.name = "No Metrics Found"
        this.stagingMetrics = [m]
      }
      else {
        this.stagingMetrics = response
        if (response.length == 1) {
        this.missionService.getStagingMissionBreadcrumb(this.stagingMetrics[0].ancestry.mission.toString()).then(m => {
          this.missionBreadCrumb = m
          this.reportingUnitBreadCrumb = this.missionBreadCrumb.reporting_units.find(r => r.id == this.stagingMetrics[0].ancestry.reporting_unit);
        })

      
      }
      }
      
 
    });
   
  }

}
