import { Component, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric, Meta, ModalData, ChartData, ScrapedMetric, Adjustment } from '../../Models/Metric';
import { forEach } from '@angular/router/src/utils/collection';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source, AddModel } from '../../Models/Source';
import { AddSourceDialogComponent } from './add-source-dialog.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';



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
  displayedColumnsSource: string[] = ['agency', 'name', 'delete', 'deleteChildren'];
  hasInflation: boolean;
  hasPerCapita: boolean;
  sources: Source[];
  allSources: Source[];
  key: string;
  http: HttpClient;
  url: string;
  published: Metric;
  constructor(
    private fb: FormBuilder, public dialogRef: MatDialogRef<EditMetricDialogComponent>, public toastr: ToastrManager, public sourceDialog: MatDialog, @Inject(MAT_DIALOG_DATA) public _data: ModalData) {
    this.metricForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.metric = _data.metric;
    this.scraped = _data.scraped;
    this.spinner = _data.spinner;
    this.hasInflation = false;
    this.sources = _data.sources;
    this.allSources = _data.allSources;
    this.key = _data.key;
    this.url = _data.url;
    this.http = _data.http;
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
      var cd1 = new ChartData();
      cd1.data = new Array();
      var j = 0;
        for (var i = 0; i < this.metric.data.length; i++) {
          if (this.metric.data[i].y != null) {
            cd1.data[j] = this.metric.data[i].y;
            this.chartLabels[j] = this.metric.data[i].x;
            j++;
          }
        }

      cd1.label = this.metric.name;
      this.chartOptions = {
        responsive: true,
      };
      this.chartType = 'line';
      this.chartColor = [
        { // grey
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
          backgroundColor: 'rgba(225, 0, 0, .1)',
          borderColor: 'rgb(255, 0, 0, 1)',
          pointBackgroundColor: 'rgb(255, 0, 0, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(225, 0, 0, .8)'
        },
        {
          backgroundColor: 'rgba(50,240,21, .1)',
          borderColor: 'rgb(50,240,21, 1)',
          pointBackgroundColor: 'rgb(50,240,21, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(50,240,21, .8)'
        }
      ];
      this.chartData.push(cd1);
      if (this.scraped && this.scraped.Data && this.scraped.Data.length != 0) {


        var cd2 = new ChartData();
        cd2.data = new Array();
        var j = 0;
        for (var i = 0; i < this.scraped.Data.length; i++) {
          if (this.scraped.Data[i].Value != null) {
            cd2.data[j] = this.scraped.Data[i].Value;
            j++;
          }
        }
        cd2.label = this.metric.name + "--Scraped";

        this.chartData.push(cd2);
      }
      if (this.published && this.published.data && this.published.data.length) {
        var cd3 = new ChartData();
        cd3.data = new Array();
        var j = 0;
        for (var i = 0; i < this.published.data.length; i++) {
          if (this.published.data[i].y != null) {
            cd3.data[j] = this.published.data[i].y;
            j++;
          }
        }
        cd3.label = this.metric.name + "--Published";

        this.chartData.push(cd3);
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
    this.spinner.hide();
  }
  cancel() {
    this.dialogRef.close(null);
  }

  save() {
    this.dialogRef.close(this.metric);
  }

  removeMeta(m: Meta) {
    this.metric.meta.forEach((item, index) => {
      if (item === m) this.metric.meta.splice(index, 1);
    });
    if (m.type === 'Definition') {
      this.hasDef = false;
    }
    if (m.type === 'Footnote') {
      this.hasFootnotes = false;
    }
  }
  addDef() {
    var meta = { type: 'Definition', data: '' };
    if (this.metric.meta)
      this.metric.meta.push(meta);
    else {
      this.metric.meta = new Array();
      this.metric.meta.push(meta);
    }
    this.hasDef = true;
  }
  addFoot() {
    var meta = { type: 'Footnote', data: '' };
    if (this.metric.meta)
      this.metric.meta.push(meta);
    else {
      this.metric.meta = new Array();
      this.metric.meta.push(meta);
    }

    this.hasFootnotes = true;
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
      data = { AllSources: sources, hasChildren: this.metric.hasChildren, key: this.key };
    }
    else {
      var data = new AddModel();
      data = { AllSources: this.allSources, hasChildren: this.metric.hasChildren, key: this.key };
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
      this.http.get<Source[]>('https://usafacts-api-staging.azurewebsites.net/api/v2' + "/sources", { headers: header }).subscribe(result => {
        this.allSources = result
      })
      if (result != null) {
        
        if (result.num == 0) {
          var includeChildren = false;
        }
        else {
          var includeChildren = true;
        }
        this.spinner.show();
        this.http.put(this.url + "/metrics/" + this.metric.id + "/AddSource/" + result.source.key + "?IncludeChildren=" + includeChildren, '', { headers: header }).subscribe(data => {
          this.toastr.successToastr("Source " + result.source.name + " was added to " + this.metric.name + "!" , "Success!");
          if (!this.metric.sources || this.metric.sources.length == 0) {
            
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
            this.toastr.errorToastr("Adding Source failed", "Oops!");
            this.spinner.hide();
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
      this.toastr.successToastr("Source \'" + s.name + "\' was deleted from " + this.metric.name + "!", "Success!");
      var temp1 = this.sources.filter(f => f.key != s.key);
      this.sources = [];
      this.sources = Object.assign([], temp1);
      var temp2 = this.metric.sources.filter(f => f != s.key);
      this.metric.sources = [];
      this.metric.sources = Object.assign([], temp2);
      this.spinner.hide();
    },
      error => {
        this.toastr.errorToastr("Deleting Source failed", "Oops!");
        this.spinner.hide();
      })
  }
  
}


