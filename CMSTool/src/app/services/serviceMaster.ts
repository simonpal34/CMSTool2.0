import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../Models/Profile';
import { LoginService } from './LoginService';
import { MissionService } from './missionService';
import { ExportService } from './exportService';
import { UploadFileService } from './uploadFileService';
import { Mission } from '../Models/Mission';
import { ReportingUnit } from '../Models/ReportingUnit';
import { Topic } from '../Models/Topic';
import { Metric, ScrapedMetric, ModalData } from '../Models/Metric';
import { Export } from '../Models/Export';
import { MetricService } from './metricService';
import { KPIService } from './kpiService';
import { SourceService } from './sourceService';
import { EditMetricDialogComponent } from '../components/MetricTable/edit-metric-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source, AddModel } from '../Models/Source';
import { EditSourceDialogComponent } from '../components/SourceTable/edit-source-dialog.component';
import { SpreadSheet, FileUpload } from '../Models/SpreadSheet';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ActivityLog, Notification } from '../Models/ActivityLog';


@Injectable()
export class ServiceMaster {
  loginService: LoginService;
  missionService: MissionService;
  exportService: ExportService;
  uploadFileService: UploadFileService;
  uploaded: FileUpload[];
  authCode: string;
  stagingUrl = 'https://usafacts-api-staging.azurewebsites.net/api/v2';
  stagingMissions: Mission[];
  stagingReportingUnits: ReportingUnit[];
  stagingTopics: Topic[];
  missionBreadCrumb: Mission;
  reportingUnitBreadCrumb: ReportingUnit;
  stagingMetrics: Metric[];
  exports: Export[];
  metricService: MetricService;
  kpiService: KPIService;
  metricEdit: Metric;
  scrapedMetric: ScrapedMetric;
  data: ModalData;
  stagingChildren: Metric[];
  topicBreadCrumb: Topic;
  metricsBreadCrumbs: Metric[]
  sourceService: SourceService;
  allSources: Source[];
  sourcesTabSelectedSource: string;
  sourcesTabSelectedSources: Source[];
  uniqueSources: string[];
  spreadSheets: SpreadSheet[];
  kpi_modified: Metric[];
  kpi_published: Metric[];
  kpi_activity_log: ActivityLog[];
  publishedMetric: Metric;
  notifications: Notification[];
  hasNotification: boolean;
  notificationNum: number;

  constructor(protected http: HttpClient, public router: Router, public dialog: MatDialog, public toastr: ToastrManager) {
    this.loginService = new LoginService(http, this.toastr);
    var r = new ReportingUnit();
    r.id = -1;
    this.stagingReportingUnits = [r];
    this.reportingUnitBreadCrumb = r;
    var t = new Topic();
    t.id = -1;
    this.stagingTopics = [t];
    this.topicBreadCrumb = t;
    var miss = new Mission();
    miss.id = -1;
    this.stagingMissions = [miss];
    this.missionBreadCrumb = miss;
    var met = new Metric;
    met.id = -1;
    this.stagingMetrics = [met];
    this.stagingChildren = [met];
    this.metricsBreadCrumbs = [met];
    this.sourcesTabSelectedSource = "";
    this.spreadSheets = [];
    this.notifications = [];
    this.hasNotification = false;
    this.notificationNum = 0;
  }

  getAuthCode() {
    this.authCode = 'Basic ' + this.loginService.profile.SessionId;
    this.missionService = new MissionService(this.http, this.authCode, this.stagingUrl);
    this.metricService = new MetricService(this.http, this.authCode, this.stagingUrl, this.toastr);
    this.sourceService = new SourceService(this.http, this.authCode, this.stagingUrl, this.toastr);
    this.uploadFileService = new UploadFileService(this.http, this.authCode, this.stagingUrl, this.toastr);
    this.kpiService = new KPIService(this.http, this.authCode, this.stagingUrl);
    //this.getMissions();
    //this.getAllSources();
    

  }

  getMissions() {
    var r = new ReportingUnit();
    r.id = -1;
    this.stagingReportingUnits = [r];
    var t = new Topic();
    t.id = -1;
    this.stagingTopics = [t];
    this.topicBreadCrumb = t;
    var met = new Metric;
    met.id = -1;
    this.stagingMetrics = [met];
    this.stagingChildren = [met];
    this.metricsBreadCrumbs = [met];
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
    this.topicBreadCrumb = t;
    var m = new Mission()
    m.id = -1;
    var met = new Metric;
    met.id = -1;
    this.stagingMetrics = [met];
    this.stagingChildren = [met];
    this.metricsBreadCrumbs = [met];
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
    }
    
  }

  getTopics() {
    var miss = new Mission();
    miss.id = -1;
    var met = new Metric;
    met.id = -1;
    this.stagingMetrics = [met];
    this.stagingChildren = [met];
    this.metricsBreadCrumbs = [met];
    var t = new Topic();
    t.id = -1;
    this.topicBreadCrumb = t;
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
    var met = new Metric;
    met.id = -1;
    this.stagingChildren = [met];
    this.metricsBreadCrumbs = [met];
    var r = new ReportingUnit();
    r.id = -1;
    if (this.stagingReportingUnits[0].id != -1)
    {
         this.reportingUnitBreadCrumb = this.stagingReportingUnits[0];
    }
 
    this.stagingReportingUnits = [r];
    var t = new Topic();
    t.id = -1;
    this.topicBreadCrumb = t;
    var ids: string = "";
    for (var i = 0; i < this.stagingTopics[0].metrics.length; i++) {
      ids = ids + this.stagingTopics[0].metrics[i].id.toString() + ",";
    }
    this.metricService.getStagingMetricSearch(ids).then(response => {
      this.stagingMetrics = response;
      for (var i = 0; i < this.stagingMetrics.length; i++) {
        if (this.stagingMetrics[i].children && this.stagingMetrics[i].children.length != 0) {
          this.stagingMetrics[i].hasChildren = true;
        }
        else {
          this.stagingMetrics[i].hasChildren = false;
        }
      }
    })
    
  }

  getParentMetricEdit(metric: Metric, spinner: NgxSpinnerService) {
    this.metricService.getStagingEdit(metric.id.toString()).then(response => {
      this.metricEdit = response;
      this.metricService.getScraped(response).then(async r => {
        this.scrapedMetric = r;
        
        this.metricService.getPublishedEdit(metric).then(p => {
          this.publishedMetric = p;
          
          
         var sources = [];
        if (this.metricEdit.sources) {
          for (let id of this.metricEdit.sources) {
 
            let s = this.allSources.filter(f => f.key == id);
            if (s)
              sources.push(s[0]);
          }
          }
          this.data = { metric: this.metricEdit, scraped: this.scrapedMetric, spinner: spinner, sources: sources, allSources: this.allSources, key: this.authCode, url: this.stagingUrl, http: this.http, published: this.publishedMetric, notifications: Object.assign([], this.notifications) };

            let dialogRef = this.dialog.open(EditMetricDialogComponent,
          {
            panelClass: 'mat-dialog-lg',
            data: this.data,
            width: '75%',
            height: '75%',

          });
        var temp = Object.assign([], this.stagingMetrics);
      
          dialogRef.afterClosed().subscribe(result => {
            this.getAllSources();
            if (result.num != 0) {
              this.hasNotification = true;
              this.notificationNum += result.num;
              this.notifications = result.notifications;
            }
            if (result.metric != null) {
                
            this.metricService.stagingPost(result.metric).then(m => {
              if (m.id > -1) {
                
                this.toastr.successToastr(m.name + ' edit complete', 'Success!', { toastTimeout: 10000 });
                if (this.notifications.length != 10) {
                  this.hasNotification = true;
                  this.notificationNum++;
                  var note = new Notification();
                  note.name = "Edited metric: " + m.name + " id: " + m.id;
                  note.date = new Date();
                  note.success = true;
                  this.notifications.push(note);
                }
                else {
                  this.hasNotification = true;
                  var note = new Notification();
                  note.name = "Edited metric: " + m.name + " id: " + m.id;
                  note.date = new Date();
                  note.success = true;
                  this.notifications.push(note);
                  this.notifications.shift();
                  if (this.notificationNum < 10) {
                    this.notificationNum++;
                  }
                }
                
              if (m.children && m.children.length > 0) {
                m.hasChildren = true;
              }
              else {
                m.hasChildren = false;
              }
              var i = temp.findIndex(met => met.id == m.id);
              temp[i] = m;
                this.stagingMetrics = Object.assign([], temp)
              }
              if (m.id == -5) {
                this.logout().then(response => {
                  if (response == false) {
                    this.router.navigate(['/login']);
                  }
                })
              }
              if (m.id == -1) {
                if (this.notifications.length != 10) {
                  this.hasNotification = true;
                  this.notificationNum++;
                  var note = new Notification();
                  note.name = "Edited metric: " + m.name + " id: " + m.id + " failed";
                  note.date = new Date();
                  note.success = false;
                  this.notifications.push(note);
                }
                else {
                  this.hasNotification = true;
                  var note = new Notification();
                  note.name = "Edited metric: " + m.name + " id: " + m.id + " failed";
                  note.date = new Date();
                  note.success = false;
                  this.notifications.push(note);
                  this.notifications.shift();
                  if (this.notificationNum < 10) {
                    this.notificationNum++;
                  }
                }
              }
            });
          }
        });
        });
      });
    });
    
  
}


  logout(): Promise<boolean> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.stagingUrl + '/authentication/LogOut', { headers: header }).toPromise()
      .then(response => {
        this.loginService.isLoggedIn = false;
        this.toastr.successToastr('Logged Out!', 'Success!', { toastTimeout: 10000 });
        return Promise.resolve(this.loginService.isLoggedIn);


      })
      .catch(error => {
        this.loginService.isLoggedIn = true;
        this.toastr.errorToastr('Logout Failed!', 'Oops!', { toastTimeout: 10000 });
        return Promise.resolve(this.loginService.isLoggedIn);
      });
  }
  getChildMetricEdit(metric: Metric, spinner: NgxSpinnerService ) {
    this.metricService.getStagingEdit(metric.id.toString()).then(response => {
      this.metricEdit = response;
      this.metricService.getScraped(response).then( r => {
        this.scrapedMetric = r;
        this.metricService.getPublishedEdit(metric).then( p => {
          this.publishedMetric = p;
        var sources = [];
        if (this.metricEdit.sources) {
          for (let id of this.metricEdit.sources) {
            let s = this.allSources.filter(f => f.key == id);
            if (s)
              sources.push(s[0]);
          }
        }
          this.data = { metric: this.metricEdit, scraped: this.scrapedMetric, spinner: spinner, sources: sources, allSources: this.allSources, key: this.authCode, url: this.stagingUrl, http: this.http, published: this.publishedMetric, notifications: this.notifications }
        let dialogRef = this.dialog.open(EditMetricDialogComponent,
          {
            panelClass: 'mat-dialog-lg',
            data: this.data,
            width: '75%',
            height: '75%',

          });
        var temp = Object.assign([], this.stagingChildren);

          dialogRef.afterClosed().subscribe(result => {
            if (result.num != 0) {
              this.hasNotification = true;
              this.notificationNum += result.num;
              this.notifications = result.notifications;
            }
            this.getAllSources();
            if (result.metric != null) {
              
            this.metricService.stagingPost(result.metric).then(m => {
              if (m.id != -1) {
                
                if (this.notifications.length != 10) {
                  this.hasNotification = true;
                  this.notificationNum++;
                  var note = new Notification();
                  note.name = "Edited metric: " + m.name + " id: " + m.id;
                  note.date = new Date();
                  note.success = true;
                  this.notifications.push(note);
                }
                else {
                  this.hasNotification = true;
                  var note = new Notification();
                  note.name = "Edited metric: " + m.name + " id: " + m.id;
                  note.date = new Date();
                  note.success = true;
                  this.notifications.push(note);
                  this.notifications.shift();
                  if (this.notificationNum < 10) {
                    this.notificationNum++;
                  }
                }
                this.toastr.successToastr(m.name + ' edit complete', 'Success!', { toastTimeout: 10000 });
                if (m.children && m.children.length > 0) {
                  m.hasChildren = true;
                }
                else {
                  m.hasChildren = false;
                }
                var i = temp.findIndex(met => met.id == m.id);
                temp[i] = m;
                this.stagingChildren = Object.assign([], temp)
              }
              if (m.id == -5) {
                this.logout().then(response => {
                  if (response == false) {
                    this.router.navigate(['/login']);
                  }
                })
              }
              if (m.id == -1) {
                if (this.notifications.length != 10) {
                  this.hasNotification = true;
                  this.notificationNum++;
                  var note = new Notification();
                  note.name = "Edited metric: " + m.name + " id: " + m.id + " failed";
                  note.date = new Date();
                  note.success = false;
                  this.notifications.push(note);
                }
                else {
                  this.hasNotification = true;
                  var note = new Notification();
                  note.name = "Edited metric: " + m.name + " id: " + m.id + " failed";
                  note.date = new Date();
                  note.success = false;
                  this.notifications.push(note);
                  this.notifications.shift();
                  if (this.notificationNum < 10) {
                    this.notificationNum++;
                  }
                }
              }
              });
          
          }
        });
        });
      });
    });


  }

  searchStaging(id: string) {
    var t = new Topic();
    t.id = -1;
    this.stagingTopics = [t];
    this.topicBreadCrumb = t;
    var m = new Mission()
    m.id = -1;
    this.stagingMissions = [m];
    var r = new ReportingUnit();
    r.id = -1;
    this.stagingReportingUnits = [r];
    var met = new Metric;
    met.id = -1;
    this.stagingChildren = [met];
    this.metricsBreadCrumbs = [met];
    this.missionBreadCrumb = m;
    this.reportingUnitBreadCrumb = r;

    this.metricService.getStagingMetricSearch(id).then(response => {
      if (response.length == 0) {
        var m = new Metric();
        m.id = -2;
        m.name = "No Metrics Found";
        this.stagingMetrics = [m];
      }
      else {
        this.stagingMetrics = response;
        for (var i = 0; i < response.length; i++) {
          if (this.stagingMetrics[i].children && this.stagingMetrics[i].children.length != 0) {
            this.stagingMetrics[i].hasChildren = true;
          }
          else {
            this.stagingMetrics[i].hasChildren = false;
          }
        }
        if (response.length == 1) {
          this.missionService.getStagingMissionBreadcrumb(this.stagingMetrics[0].ancestry.mission.toString()).then(m => {
            this.missionBreadCrumb = m;
            this.reportingUnitBreadCrumb = this.missionBreadCrumb.reporting_units.find(r => r.id == this.stagingMetrics[0].ancestry.reporting_unit);
            this.topicBreadCrumb = this.reportingUnitBreadCrumb.topics.find(t => t.id == this.stagingMetrics[0].ancestry.topic);
          });
          if (this.stagingMetrics[0].ancestry.ancestor_metrics) {
            this.metricService.getStagingMetricSearch(this.stagingMetrics[0].ancestry.ancestor_metrics.toString()).then(r => {
              this.metricsBreadCrumbs = r.concat(response[0]);
            });
          }
          else {
            this.metricsBreadCrumbs = [response[0]];
          }
          if (this.stagingMetrics[0].hasChildren) {
            this.metricService.getStagingMetricSearch(this.stagingMetrics[0].children.toString()).then(response => {
              this.stagingChildren = response;
              for (var i = 0; i < response.length; i++) {
                if (this.stagingChildren[i].children && this.stagingChildren[i].children.length != 0) {
                  this.stagingChildren[i].hasChildren = true;
                }
                else {
                  this.stagingChildren[i].hasChildren = false;
                }
              }
            })
          }

      
      }
      }
      
 
    });
   
  }

  trendToChildren(m: Metric) {
    this.metricsBreadCrumbs.push(m);
    this.metricService.getStagingMetricSearch(m.children.toString()).then(response => {
      this.stagingChildren = response;
      for (var i = 0; i < response.length; i++) {
        if (this.stagingChildren[i].children && this.stagingChildren[i].children.length != 0) {
          this.stagingChildren[i].hasChildren = true;
        }
        else {
          this.stagingChildren[i].hasChildren = false;
        }
      }
    })
  }

  async getAllSources() {
    await this.sourceService.GetAllStagingSources().then(async response => {
      this.allSources = await response
      var curr = this.allSources.map(d => d.AgencyName);
      this.uniqueSources = curr.filter(function (el, i, arr) {
        return arr.indexOf(el) == i;
      });
    });
  }

  openSourceEdit(s: Source, add: boolean) {
    
    let dialogRef = this.dialog.open(EditSourceDialogComponent,
      {
        panelClass: 'mat-dialog-lg',
        data: s,
        width: '75%',
        height: '75%',

      });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        
        this.sourceService.UpdateSource(result, add).then(async s => {
          if (s.id != -1) {
            await this.getAllSources();
            if (!add) {

              if (this.notifications.length != 10) {
                this.hasNotification = true;
                this.notificationNum++;
                var note = new Notification();
                note.name = "Edited source: " + result.name;
                note.date = new Date();
                note.success = true;
                this.notifications.push(note);
              }
              else {
                this.hasNotification = true;
                var note = new Notification();
                note.name = "Edited source: " + result.name;
                note.date = new Date();
                note.success = true;
                this.notifications.push(note);
                this.notifications.shift();
                if (this.notificationNum < 10) {
                  this.notificationNum++;
                }
              }
            }
            else {
              if (this.notifications.length != 10) {
                this.hasNotification = true;
                this.notificationNum++;
                var note = new Notification();
                note.name = "Added source: " + result.name;
                note.date = new Date();
                note.success = true;
                this.notifications.push(note);
              }
              else {
                this.hasNotification = true;
                var note = new Notification();
                note.name = "Added source: " + result.name;
                note.date = new Date();
                note.success = true;
                this.notifications.push(note);
                this.notifications.shift();
                if (this.notificationNum < 10) {
                  this.notificationNum++;
                }
              }
            }
            
            this.sourcesTabSelectedSources = this.allSources.filter(s => s.AgencyName == this.sourcesTabSelectedSource);
          }
          else {
            if (!add) {
              if (this.notifications.length != 10) {
                this.hasNotification = true;
                this.notificationNum++;
                var note = new Notification();
                note.name = "Edit source: " + result.name + " failed";
                note.date = new Date();
                note.success = false;
                this.notifications.push(note);
              }
              else {
                this.hasNotification = true;
                var note = new Notification();
                note.name = "Edited source: " + result.name + " failed";
                note.date = new Date();
                note.success = false;
                this.notifications.push(note);
                this.notifications.shift();
                if (this.notificationNum < 10) {
                  this.notificationNum++;
                }
              }
            }
            else {
              if (this.notifications.length != 10) {
                this.hasNotification = true;
                this.notificationNum++;
                var note = new Notification();
                note.name = "Add source: " + result.name + " failed";
                note.date = new Date();
                note.success = false;
                this.notifications.push(note);
              }
              else {
                this.hasNotification = true;
                var note = new Notification();
                note.name = "Add source: " + result.name + " failed";
                note.date = new Date();
                note.success = false;
                this.notifications.push(note);
                this.notifications.shift();
                if (this.notificationNum < 10) {
                  this.notificationNum++;
                }
              }
            }
            
          }
        });
        
      }
    });
  }

  deleteSource(s: Source) {
    this.sourceService.DeleteSource(s).then(async b => {
      if (b) {
        if (this.notifications.length != 10) {
          this.hasNotification = true;
          this.notificationNum++;
          var note = new Notification();
          note.name = "Deleted source: " + s.name;
          note.date = new Date();
          note.success = true;
          this.notifications.push(note);
        }
        else {
          this.hasNotification = true;
          var note = new Notification();
          note.name = "Deleted source: " + s.name;
          note.date = new Date();
          note.success = true;
          this.notifications.push(note);
          this.notifications.shift();
          if (this.notificationNum < 10) {
            this.notificationNum++;
          }
        }
        await this.getAllSources();
        this.sourcesTabSelectedSources = this.allSources.filter(src => src.AgencyName == this.sourcesTabSelectedSource);
      }
      else {

        if (this.notifications.length != 10) {
          this.hasNotification = true;
          this.notificationNum++;
          var note = new Notification();
          note.name = "Deleting source: " + s.name + " failed";
          note.date = new Date();
          note.success = false;
          this.notifications.push(note);
        }
        else {
          this.hasNotification = true;
          var note = new Notification();
          note.name = "Deleting source: " + s.name + " failed";
          note.date = new Date();
          note.success = false;
          this.notifications.push(note);
          this.notifications.shift();
          if (this.notificationNum < 10) {
            this.notificationNum++;
          }
        }
      }
      
      
    })
  }

  getSpreadSheets() {
    this.uploadFileService.getSpreadSheets().then(s => {
      this.spreadSheets = s;
    });
  }
  getUploaded() {
    this.uploadFileService.getUploaded().then(f => {
      this.uploaded = f;
    });
  }
  upload(sheet: File, type: SpreadSheet) {
    if (sheet) {
      this.uploadFileService.DoesFileUploadMetricExist(sheet).then(response => {
        if (!response) {
          this.uploadSheet(sheet, type);
        }
        else {
          if (confirm("This metric already exists do you want to replace it")) {
            this.uploadSheet(sheet, type);
          }
          else {
            this.toastr.infoToastr('Spread Sheet upload canceled', 'Info', { toastTimeout: 10000 })
          }
        }
      })
    }
    else {
      this.toastr.errorToastr('Select SpreadSheet!', 'Oops!', { toastTimeout: 10000 });
    }
    
  }

  uploadSheet(sheet: File, type: SpreadSheet) {
    this.toastr.infoToastr("The upload is in progress and can take a few minutes.  You may continue using the application and you will be notified when it is complete ", "Info", { toastTimeout: 10000 });
    this.uploadFileService.UploadFile(sheet, type).then(async response => {
      if (response) {
        await this.getUploaded();
        this.toastr.successToastr(sheet.name + ' was uploaded', 'Success', { toastTimeout: 10000 });
        if (this.notifications.length != 10) {
          this.hasNotification = true;
          this.notificationNum++;
          var note = new Notification();
          note.name = "Uploaded sheet: " + sheet.name;
          note.date = new Date();
          note.success = true;
          this.notifications.push(note);
        }
        else {
          this.hasNotification = true;
          var note = new Notification();
          note.name = "Uploaded sheet: " + sheet.name;
          note.date = new Date();
          note.success = true;
          this.notifications.push(note);
          this.notifications.shift();
          if (this.notificationNum < 10) {
            this.notificationNum++;
          }
        }
      }
      else {
        if (this.notifications.length != 10) {
          this.hasNotification = true;
          this.notificationNum++;
          var note = new Notification();
          note.name = "Uploading sheet: " + sheet.name + " failed";
          note.date = new Date();
          note.success = false;
          this.notifications.push(note);
        }
        else {
          this.hasNotification = true;
          var note = new Notification();
          note.name = "Uploading sheet: " + sheet.name + " failed";
          note.date = new Date();
          note.success = false;
          this.notifications.push(note);
          this.notifications.shift();
          if (this.notificationNum < 10) {
            this.notificationNum++;
          }
        }
      }
    })
  }

  async publishMetric(m: Metric, b: boolean) {
    this.toastr.infoToastr("Publishing metric" + m.name + " is in progress and can take a few minutes.  You may continue using the application and you will be notified when it is complete ", "Info", { toastTimeout: 10000 });
    await this.metricService.publishMetric(m, b).then(async response => {
      if (response) {
        if (b) {
          if (this.notifications.length != 10) {
            this.hasNotification = true;
            this.notificationNum++;
            var note = new Notification();
            note.name = "Published metric: " + m.name + " id: " + m.id + " and children";
            note.date = new Date();
            note.success = true;
            this.notifications.push(note);
          }
          else {
            this.hasNotification = true;
            var note = new Notification();
            note.name = "Published metric: " + m.name + " id: " + m.id + " and children";
            note.date = new Date();
            note.success = true;
            this.notifications.push(note);
            this.notifications.shift();
            if (this.notificationNum < 10) {
              this.notificationNum++;
            }
          }
        }
        else {
          if (this.notifications.length != 10) {
            this.hasNotification = true;
            this.notificationNum++;
            var note = new Notification();
            note.name = "Published metric: " + m.name + " id: " + m.id;
            note.date = new Date();
            note.success = true;
            this.notifications.push(note);
          }
          else {
            this.hasNotification = true;
            var note = new Notification();
            note.name = "Published metric: " + m.name + " id: " + m.id;
            note.date = new Date();
            note.success = true;
            this.notifications.push(note);
            this.notifications.shift();
            if (this.notificationNum < 10) {
              this.notificationNum++;
            }
          }
        }
        var metric = await response;
        var temp = Object.assign([], this.stagingMetrics);
        //update the hasChildren (This is used by the UI)
        if (metric.children && metric.children.length != 0) {
          metric.hasChildren = true;
        }
        else {
          metric.hasChildren = false;
        }
        var i = temp.findIndex(met => met.id == metric.id);
        temp[i] = metric;
        this.stagingMetrics = Object.assign([], temp);
        if (b && this.stagingChildren[0].id != -2) {
          var tempChildren = Object.assign([], this.stagingChildren);
          for (let child of metric.children) {
            var i = tempChildren.findIndex(met => met.id == child);
            tempChildren[i].LastPushedIntoProduction = metric.LastPushedIntoProduction
            tempChildren[i].modified_on = metric.modified_on
          }
          this.stagingChildren = Object.assign([], tempChildren);
        }
      }
      else {
        if (b) {
          if (this.notifications.length != 10) {
            this.hasNotification = true;
            this.notificationNum++;
            var note = new Notification();
            note.name = "Publisheing metric: " + m.name + " id: " + m.id + " and children failed";
            note.date = new Date();
            note.success = false;
            this.notifications.push(note);
          }
          else {
            this.hasNotification = true;
            var note = new Notification();
            note.name = "Publishing metric: " + m.name + " id: " + m.id + " and children failed";
            note.date = new Date();
            note.success = false;
            this.notifications.push(note);
            this.notifications.shift();
            if (this.notificationNum < 10) {
              this.notificationNum++;
            }
          }
        }
        else {
          if (this.notifications.length != 10) {
            this.hasNotification = true;
            this.notificationNum++;
            var note = new Notification();
            note.name = "Publishing metric: " + m.name + " id: " + m.id + " failed";
            note.date = new Date();
            note.success = false;
            this.notifications.push(note);
          }
          else {
            this.hasNotification = true;
            var note = new Notification();
            note.name = "Published metric: " + m.name + " id: " + m.id + " failed";
            note.date = new Date();
            note.success = false;
            this.notifications.push(note);
            this.notifications.shift();
            if (this.notificationNum < 10) {
              this.notificationNum++;
            }
          }
        }
      }
        
      });
   
  }
}
