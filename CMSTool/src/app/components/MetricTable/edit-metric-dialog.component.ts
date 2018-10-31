import { Component, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric, Meta, ModalData, ChartData, ScrapedMetric, Adjustment, Data } from '../../Models/Metric';
import { forEach } from '@angular/router/src/utils/collection';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source, AddModel } from '../../Models/Source';
import { AddSourceDialogComponent } from './add-source-dialog.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Notification } from '../../Models/ActivityLog';
import { BaseChartDirective } from 'ng2-charts';
import { EditSourceDialogComponent } from '../SourceTable/edit-source-dialog.component';
import { AddMetaDataDialogComponent } from './add-meta-data-dialog .component';



@Component({
    selector: 'edit-metric-dialog',
    templateUrl: 'edit-metric-dialog.component.html',
})
export class EditMetricDialogComponent {
  metricForm: FormGroup;
  metric: Metric;
  axisLabels: string[];
  hasDef: boolean = false;
  hasFootnotes: boolean = false;
  chartData: ChartData[];
  chartLabels: string[]
  chartOptions: any;
  chartColor: any[];
  chartType: string;
  scraped: ScrapedMetric;
  hasData: boolean;
  spinner: NgxSpinnerService;
  displayedColumnsAdj: string[] = ['name', 'delete'];
  displayedColumnsSource: string[] = ['agency', 'name', 'edit', 'delete'];
  displayedColumnsMeta: string[] = ['type', 'data','edit', 'delete'];
  hasInflation: boolean;
  hasPerCapita: boolean;
  sources: Source[];
  allSources: Source[];
  key: string;
  http: HttpClient;
  url: string;
  published: Metric;
  notifications: Notification[];
  nots: number;
  stagingChart: ChartData;
  stagingColor: any;
  scrapedChart: ChartData;
  scrapedColor: any;
  publishedChart: ChartData;
  publishedColor: any;
  showScraped: boolean;
  showStaging: boolean;
  showPublished: boolean;
  noMeta: Meta[];
  @ViewChild('linechart') linechart: BaseChartDirective;
  constructor(
    private fb: FormBuilder, public dialogRef: MatDialogRef<EditMetricDialogComponent>, public toastr: ToastrManager, public editDialog: MatDialog, public sourceDialog: MatDialog, public metaDialof: MatDialog, @Inject(MAT_DIALOG_DATA) public _data: ModalData) {
    this.metricForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.nots = 0;
    this.metric = _data.metric;
    this.scraped = _data.scraped;
    this.spinner = _data.spinner;
    this.hasInflation = false;
    this.sources = _data.sources;
    this.allSources = _data.allSources;
    this.key = _data.key;
    this.url = _data.url;
    this.http = _data.http;
    this.notifications = _data.notifications;
    this.published = _data.published;
    if (this.metric.children && this.metric.children.length != 0) {
      this.metric.hasChildren = true;
    }
    this.axisLabels = ["People", "Dollars", "Percent", "Items", "Months", "Years", "Hours",
      "PerCapita", "DefendantsPerCriminalCase", "States", "WorkersPerState", "Per100000People", "Days", "Weeks"];
    if (this.metric.meta) {
      for (var m of this.metric.meta) {
        if (m.type === "Definition") {
          this.hasDef = true;
        }
        if (m.type === "Footnote") {
          this.hasFootnotes = true;
        }
      }
    }
    if (this.metric.data) {
      this.hasData = true;
      this.chartData = new Array();
      this.chartLabels = new Array();
      var temp = Object.assign([], this.chartLabels);
      this.stagingChart = new ChartData();
      this.stagingChart.data = new Array();
      var j = 0;
      for (var i = 0; i < this.metric.data.length; i++) {
        if (this.metric.data[i].y != null) {

          temp[j] = this.metric.data[i].x;
          j++;
        }
      }

      this.stagingChart.label = "Staging";
      this.chartOptions = {
        responsive: true,
        animation: false
      };
      this.chartType = 'line';
      this.publishedColor = {
        backgroundColor: 'rgba(0,44,119,0.2)',
        borderColor: 'rgba(0,44,119,1)',
        pointBackgroundColor: 'rgba(0,44,119,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(0,44,119,0.8)'
      }
      this.scrapedColor = {
        backgroundColor: 'rgba(198,40,40, .1)',
        borderColor: 'rgb(198,40,40, 1)',
        pointBackgroundColor: 'rgb(198,40,40, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(198,40,40, .8)'
      }
      this.stagingColor = {
        backgroundColor: 'rgba(34,139,34, .1)',
        borderColor: 'rgb(34,139,34, 1)',
        pointBackgroundColor: 'rgb(34,139,34, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(34,139,34, .8)'
      }
      this.chartColor = [this.stagingColor];
      this.chartData.push(this.stagingChart);
      this.showStaging = true;
      if (this.scraped && this.scraped.Data && this.scraped.Data.length != 0) {
        this.scrapedChart = new ChartData();
        this.scrapedChart.data = new Array();

        for (var i = 0; i < this.scraped.Data.length; i++) {
          temp.push(this.scraped.Data[i].Key);
        }
        this.scrapedChart.label = "Scraped";
        this.showScraped = false;
      }
      if (this.published && this.published.data && this.published.data.length) {
        this.publishedChart = new ChartData();
        this.publishedChart.data = new Array();
        for (var i = 0; i < this.published.data.length; i++) {
          temp.push(this.published.data[i].x);
        }
        this.publishedChart.label = "Published";

        this.showPublished = false;
      }
      temp = temp.filter((el, i, a) => i === a.indexOf(el));
      this.chartLabels = temp.sort();
      for (var i = 0; i < this.metric.data.length; i++) {
        if (this.metric.data[i].y != null) {
          for (var j = 0; j < this.chartLabels.length; j++) {
            if (this.chartLabels[j] == this.metric.data[i].x) {

              this.stagingChart.data[j] = this.metric.data[i].y;
            }
          }
        }
      }

      if (this.published && this.published.data && this.published.data.length) {
        for (var i = 0; i < this.published.data.length; i++) {
          if (this.published.data[i].y != null) {
            for (var j = 0; j < this.chartLabels.length; j++) {
              if (this.chartLabels[j] == this.published.data[i].x) {
                this.publishedChart.data[j] = this.published.data[i].y;
              }
            }
          }
        }
      }
      if (this.scraped && this.scraped.Data && this.scraped.Data.length != 0) {
        for (var i = 0; i < this.scraped.Data.length; i++) {
          if (this.scraped.Data[i].Value != null) {
            for (var j = 0; j < this.chartLabels.length; j++) {
              if (this.chartLabels[j] == this.scraped.Data[i].Key) {
                this.scrapedChart.data[j] = this.scraped.Data[i].Value;
              }
            }
          }
        }
      }
    }

    else {
      this.hasData = false;
    }
    if (this.metric.available_adjustments != null) {
      if (this.metric.available_adjustments.length != 0) {
        for (var i = 0; i < this.metric.available_adjustments.length; i++) {
          if (this.metric.available_adjustments[i].id == "inflation") {
            this.hasInflation = true;
          }
          if (this.metric.available_adjustments[i].id == "per capita") {
            this.hasPerCapita = true;
          }
        }
      }
    }
    if (this.metric.available_adjustments == null) {
      this.metric.available_adjustments = new Array<Adjustment>();
    }
    this.noMeta = [{ type:"No Meta Data", data: "", id: 0 }];
    this.spinner.hide();
  }
  cancel() {
    this.dialogRef.close({ metric: null, notifications: this.notifications, num: this.nots });
  }

  save() {
    this.dialogRef.close({ metric: this.metric, notifications: this.notifications, num: this.nots });
  }

  removeMeta(m: Meta, children: boolean) {
    var temp = Object.assign([], this.metric.meta);
    temp.forEach((item, index) => {
      if (item === m) temp.splice(index, 1);
    });
    this.metric.meta = Object.assign([], temp);
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    //Make post to remove the metadata 
    this.http.post<Meta>(this.url + '/metrics/' + this.metric.id + '/RemoveMetadata?metadataId=' + m.id+ '&IncludeChildren=' + children,'', { headers: header }).subscribe(r => {
      this.toastr.successToastr("Metatdata for \'" + this.metric.name + "\' was removed!", "Success!");
    })
  }
  addMeta() {
    var m = new Meta();
    m.data = "";
    m.type = "";
    let d = this.sourceDialog.open(AddMetaDataDialogComponent,
      {
        panelClass: 'mat-dialog-lg',
        width: '60%',
        height: '45%',
        data: m

      });
    d.afterClosed().subscribe(result => {
      if (result != null) {
         var includeChildren = result.c;
         var newMeta = result.m
         //put the body in the call
        var body = JSON.stringify(newMeta);
        let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
        //Make post to add the new metadata 
        this.http.post<Meta>(this.url + "/metrics/" + this.metric.id + "/Metadata?IncludeChildren=" + includeChildren , body, { headers: header }).subscribe(r => {
            //  ***** The code below should be formatted to go in here so you can set the meta id before you put it in the table cause the dialog result won't have an id but r from the call will*****
           this.toastr.successToastr("Metatdata for \'" + this.metric.name + "\' was added!", "Success!");
           })
        if (!this.metric.meta) {
          this.metric.meta = [];
          this.metric.meta.push(result.m);
        }
        else {
          var temp = Object.assign([], this.metric.meta);
          temp.push(result.m);
          this.metric.meta = Object.assign([], temp);
        }
       
      }
    });
  }
  editMeta(m: Meta) {
    var temp = Object.assign([], this.metric.meta);
    var i = temp.findIndex(met => met.data == m.data && met.type == m.type);
    let d = this.sourceDialog.open(AddMetaDataDialogComponent,
      {
        panelClass: 'mat-dialog-lg',
        width: '60%',
        height: '45%',
        data: m

      });
    d.afterClosed().subscribe(result => {
      if (result != null) {
        temp[i] = result;
        this.metric.meta = Object.assign([], temp);
        var newMeta = result
        var body = JSON.stringify(newMeta);
        let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
        this.http.put<Meta>(this.url + "/metrics/" + this.metric.id + "/Metadata",body, { headers: header }).subscribe(r => {
         //wont have to set the meta cause the id is already on these
           this.toastr.successToastr("Metatdata for \'" + this.metric.name + "\' was updated!", "Success!");
           })
      }
    });
  }

  RemoveAdjustment(a: Adjustment) {
    var temp = Object.assign([], this.metric.available_adjustments);
    temp.forEach((item, index) => {
      if (item === a) temp.splice(index, 1);
    });
    this.metric.available_adjustments = temp;
    if (a.id == "inflation") {
      this.hasInflation = false;
    }
    if (a.id == "per capita") {
      this.hasPerCapita = false;
    }
    
  }
  addInflation() {
    var adj = new Adjustment();
    adj.id = "inflation";
    adj.name = "Adjust for inflation";
    var temp = Object.assign([], this.metric.available_adjustments);
    if (this.hasPerCapita) {
      temp[1] = adj;
    }
    else {
      temp.push(adj);
    }
    this.metric.available_adjustments = temp;
      this.hasInflation = true;
    
  }
  addPerCapita() {
    var adj = new Adjustment();
    adj.id = "per capita";
    adj.name = "Adjust for per capita";
    var temp = Object.assign([], this.metric.available_adjustments);
    if (this.hasInflation) {
      temp[1] = adj;
    }
    else {
      temp.push(adj);
    }
    this.metric.available_adjustments = temp;
    this.hasPerCapita = true;

  }

  addSources() {

    if (this.sources.length != 0) {
      var sources = this.allSources;
      for (var i = 0; i < this.metric.sources.length; i++) {
        var data = new AddModel();
        sources = sources.filter(s => s.key != this.metric.sources[i])
        
      }
      data = { AllSources: sources, hasChildren: this.metric.hasChildren, key: this.key, notifications:  this.notifications};
    }
    else {
      var data = new AddModel();
      data = { AllSources: this.allSources, hasChildren: this.metric.hasChildren, key: this.key, notifications: this.notifications };
    }
    let d = this.sourceDialog.open(AddSourceDialogComponent,
      {
        panelClass: 'mat-dialog-lg',
        width: '70%',
        height: '55%',
        data

      });
    d.afterClosed().subscribe(result => {

      let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
      this.http.get<Source[]>(this.url + "/sources", { headers: header }).subscribe(r => {
        this.allSources = r
      })
      if (result.notNum != 0) {
        this.nots += result.notNum;
        this.notifications = result.notifications;
      }
      if (result.source != null) {
        
        if (result.num == 0) {
          var includeChildren = false;
        }
        else {
          var includeChildren = true;
        }
        this.spinner.show();
        this.http.put(this.url + "/metrics/" + this.metric.id + "/AddSource/" + result.source.key + "?IncludeChildren=" + includeChildren, '', { headers: header }).subscribe(data => {
          if (includeChildren == false) {
            this.toastr.successToastr("Source " + result.source.name + " was added to " + this.metric.name + "!", "Success!");
            if (this.notifications.length != 10) {
              var note = new Notification();
              note.name = "Added Source: " + result.source.name + " to " + this.metric.name;
              note.date = new Date();
              note.success = true;
              this.notifications.push(note);
              this.nots++;
            }
            else {
              var note = new Notification();
              note.name = "Added Source: " + result.source.name + " to " + this.metric.name;
              note.date = new Date();
              note.success = true;
              this.notifications.push(note);
              this.notifications.shift();
              if (this.nots < 10) {
                this.nots++
              }
            }
          }
          else {
            this.toastr.successToastr("Source " + result.source.name + " was added to " + this.metric.name + " and children!", "Success!");
            if (this.notifications.length != 10) {
              var note = new Notification();
              note.name = "Added Source: " + result.source.name + " to " + this.metric.name + " and children";
              note.date = new Date();
              note.success = true;
              this.notifications.push(note);
              this.nots++;
            }
            else {
              var note = new Notification();
              note.name = "Added Source: " + result.source.name + " to " + this.metric.name + " and children";
              note.date = new Date();
              note.success = true;
              this.notifications.push(note);
              this.notifications.shift();
              if (this.nots < 10) {
                this.nots++
              }
            }
          }
          if (!this.metric.sources || this.metric.sources.length == 0) {
            this.metric.sources = [];
            this.metric.sources.push(result.source.key);
          }
          else {
            var temp = Object.assign([], this.metric.sources);
            temp.push(result.source.key);
            this.metric.sources = [];
            this.metric.sources = Object.assign([], temp);
          }
          
          if (!this.sources || this.sources.length == 0) {
            this.sources = [];
            var temp2 = Object.assign([], this.sources);
          }
          else {
            
            var temp2 = Object.assign([], this.sources);
            this.sources = [];
          }
          if (result.source) {
            
            temp2.push(result.source);
          }
          this.sources = Object.assign([], temp2);
          this.spinner.hide();
          
        },
          error => {
            if (includeChildren == false) {
              this.toastr.errorToastr("Adding Source failed", "Oops!");
              this.spinner.hide();
              if (this.notifications.length != 10) {
                var note = new Notification();
                note.name = "Adding Source: " + result.source.name + " to " + this.metric.name + " Failed";
                note.date = new Date();
                note.success = false;
                this.notifications.push(note);
                this.nots++;
              }
              else {
                var note = new Notification();
                note.name = "Adding Source: " + result.source.name + " to " + this.metric.name + " Failed";
                note.date = new Date();
                note.success = false;
                this.notifications.push(note);
                this.notifications.shift();
                if (this.nots < 10) {
                  this.nots++
                }
              }
            }
            else {
              this.toastr.errorToastr("Adding Source failed", "Oops!");
              this.spinner.hide();
              if (this.notifications.length != 10) {
                var note = new Notification();
                note.name = "Adding Source: " + result.source.name + " to " + this.metric.name + " and children Failed";
                note.date = new Date();
                note.success = false;
                this.notifications.push(note);
                this.nots++;
                
              }
              else {
                var note = new Notification();
                note.name = "Adding Source: " + result.source.name + " to " + this.metric.name + " and children Failed";
                note.date = new Date();
                note.success = false;
                this.notifications.push(note);
                this.notifications.shift();
                if (this.nots < 10) {
                  this.nots++
                }
                
              }
            }
            
          })
      }
    });
  }

  async removeSource(s: Source, n: number) {
    if (n == 0) {
      var includeChildren = false;
    }
    else{
      var includeChildren = true;
    }
    this.spinner.show();
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    await this.http.put(this.url + "/metrics/" + this.metric.id + "/RemoveSource/" + s.key + "?IncludeChildren=" + includeChildren, '', { headers: header }).subscribe(data => {
      if (includeChildren == false) {
        this.toastr.successToastr("Source \'" + s.name + "\' was deleted from " + this.metric.name + "!", "Success!");
        if (this.notifications.length != 10) {
          var note = new Notification();
          note.name = "Removed Source: " + s.name + " from " + this.metric.name;
          note.date = new Date();
          note.success = true;
          this.notifications.push(note);
          this.nots++;
        }
        else {
          var note = new Notification();
          note.name = "Removed Source: " + s.name + " from " + this.metric.name;
          note.date = new Date();
          note.success = true;
          this.notifications.push(note);
          this.notifications.shift();
          if (this.nots < 10) {
            this.nots++
          }
        }
      }
      else {
        this.toastr.successToastr("Source \'" + s.name + "\' was deleted from " + this.metric.name + " and children!", "Success!");
        if (this.notifications.length != 10) {
          var note = new Notification();
          note.name = "Removed Source: " + s.name + " from " + this.metric.name + " and children";
          note.date = new Date();
          note.success = true;
          this.notifications.push(note);
          this.nots++;
        }
        else {
          var note = new Notification();
          note.name = "Removed Source: " + s.name + " from " + this.metric.name + " and children";
          note.date = new Date();
          note.success = true;
          this.notifications.push(note);
          this.notifications.shift();
          if (this.nots < 10) {
            this.nots++
          }
        }
      }
     
      var temp1 = this.sources.filter(f => f.key != s.key);
      this.sources = [];
      this.sources = Object.assign([], temp1);
      var temp2 = this.metric.sources.filter(f => f != s.key);
      this.metric.sources = [];
      this.metric.sources = Object.assign([], temp2);
      this.spinner.hide();
    },
      error => {
        if (includeChildren == false) {
          this.toastr.errorToastr("Deleting Source failed", "Oops!");
          this.spinner.hide();
          if (this.notifications.length != 10) {
            var note = new Notification();
            note.name = "Removing Source: " + s.name + " from " + this.metric.name + " Failed";
            note.date = new Date();
            note.success = false;
            this.notifications.push(note);
            this.nots++;
          }
          else {
            var note = new Notification();
            note.name = "Removing Source: " + s.name + " from " + this.metric.name + " Failed";
            note.date = new Date();
            note.success = false;
            this.notifications.push(note);
            this.notifications.shift();
            if (this.nots < 10) {
              this.nots++
            }
          }
        }
        else {
          this.toastr.errorToastr("Deleting Source failed", "Oops!");
          this.spinner.hide();
          if (this.notifications.length != 10) {
            var note = new Notification();
            note.name = "Removing Source: " + s.name + " from " + this.metric.name + " and children Failed";
            note.date = new Date();
            note.success = false;
            this.notifications.push(note);
            this.nots++;
          }
          else {
            var note = new Notification();
            note.name = "Removing Source: " + s.name + " from " + this.metric.name + " and children Failed";
            note.date = new Date();
            note.success = false;
            this.notifications.push(note);
            this.notifications.shift();
            if (this.nots < 10) {
              this.nots++
            }
          }
        }
        
      })
  }

  toggleScraped() {
    if (this.showScraped) {
      var temp = Object.assign([], this.chartData);
      if (temp.length == 1 ) {
        var c = new ChartData();
        c.data = [0];
        c.label = ""
        temp = [c];
        this.chartColor = [];

      }
      else {
        var i = temp.findIndex(c => c.label == 'Scraped');
        temp = temp.filter(c => c.label != 'Scraped');
        var colors = Object.assign([], this.chartColor);
        colors.splice(i, 1);
        this.chartColor = Object.assign([], colors);
      }
      
      this.chartData = Object.assign([], temp);  
      this.showScraped = false;
    }
    else {
      this.chartColor.push(this.scrapedColor);
      if (this.chartData[0].label == "") {
        this.chartData = [this.scrapedChart];
      }
      else {
        this.chartData.push(this.scrapedChart);
      }
      
      this.showScraped = true;
    }
    this.updateChart()
  }
  toggleStaging() {
    if (this.showStaging) {
      var temp = Object.assign([], this.chartData)
      if (temp.length == 1 ) {
        var c = new ChartData();
        c.data = [0];
        c.label = ""
        temp = [c];
        this.chartColor = [];
      }
      else {
        var i = temp.findIndex(c => c.label == 'Staging');
        temp = temp.filter(c => c.label != 'Staging');
        var colors = Object.assign([], this.chartColor);
        colors.splice(i, 1);
        this.chartColor = Object.assign([], colors);
      }
      
      this.chartData = Object.assign([], temp);
      this.showStaging = false;
    }
    else {
      this.chartColor.push(this.stagingColor);
      if (this.chartData[0].label == "") {
        this.chartData = [this.stagingChart];
      }
      else {
        this.chartData.push(this.stagingChart);
      }  
      
      this.showStaging = true;
    }
    this.updateChart()
  }
  togglePublished() {
    if (this.showPublished) {
      var temp = Object.assign([], this.chartData)
      if (temp.length == 1 ) {
        var c = new ChartData();
        c.data = [0];
        c.label = ""
        temp = [c];
        this.chartColor = [];

      }
      else {
        var i = temp.findIndex(c => c.label == 'Published');
        temp = temp.filter(c => c.label != 'Published');
        var colors = Object.assign([], this.chartColor);
        colors.splice(i, 1);
        this.chartColor = Object.assign([], colors);
      }      
      this.chartData = Object.assign([], temp);
      this.showPublished= false;
    }
    else {
      this.chartColor.push(this.publishedColor);
      if (this.chartData[0].label == "") {
        this.chartData = [this.publishedChart];
      }
      else {
        this.chartData.push(this.publishedChart);
      }  
      
      this.showPublished = true;
    }
    this.updateChart()
  }
  updateChart() {
    if (this.linechart) {
      setTimeout(() => {
        this.linechart.getChartBuilder(this.linechart.ctx);
      }, 10);
    } 
  }

  openEdit(s: Source) {
    var curr = this.allSources.map(d => d.AgencyName);
    var uniqueSources = curr.filter(function (el, i, arr) {
      return arr.indexOf(el) == i;
    });
    var source = new Source();
    source = Object.assign({}, s);
    let d = this.editDialog.open(EditSourceDialogComponent,
      {
        panelClass: 'mat-dialog-lg',
        data: {
          s: source, unique: uniqueSources, add: false
        },
        width: '75%',
        height: '75%',

      });
    d.afterClosed().subscribe(result => {
      if (result != null) {
        let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
        var body = JSON.stringify(result);
        this.http.put<Source>(this.url + "/sources", body, { headers: header }).toPromise().then(response => {
          this.toastr.successToastr(result.name + ' edit complete', 'Success!');
          if (this.notifications.length != 10) {
            var note = new Notification();
            note.name = "Edited Source: " + result.name;
            note.date = new Date();
            note.success = true;
            this.notifications.push(note);
            this.nots++;
          }
          else {
            var note = new Notification();
            note.name = "Edited Source: " + result.name;
            note.date = new Date();
            note.success = true;
            this.notifications.push(note);
            this.notifications.shift();
            if (this.nots < 10) {
              this.nots++
            }
          }
          var i = this.sources.findIndex(src => src.key == result.key);
          var temp = Object.assign([], this.sources);
          temp[i] = result;
          this.sources = Object.assign([], temp);
        }).catch(error => {
          this.toastr.errorToastr('Edit Failed!', 'Oops!');
          if (this.notifications.length != 10) {
            var note = new Notification();
            note.name = "Edit Source: " + result.name + " failed";
            note.date = new Date();
            note.success = false;
            this.notifications.push(note);
            this.nots++;
          }
          else {
            var note = new Notification();
            note.name = "Edit Source: " + result.name + " failed";
            note.date = new Date();
            note.success = false;
            this.notifications.push(note);
            this.notifications.shift();
            if (this.nots < 10) {
              this.nots++
            }
          }
        })

      }
      else {
      }
    });
  }
  
}


