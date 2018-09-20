import { Component, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric, Meta, ModalData, ChartData, ScrapedMetric, Adjustment } from '../../Models/Metric';
import { forEach } from '@angular/router/src/utils/collection';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source } from '../../Models/Source';
import { AddSourceDialogComponent } from './add-source-dialog.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';



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
  data: ChartData[][];
  scraped: ScrapedMetric;
  hasData: boolean;
  spinner: NgxSpinnerService;
  displayedColumnsAdj: string[] = ['name', 'delete'];
  displayedColumnsSource: string[] = ['agency', 'name', 'delete', 'deleteChildren'];
  hasInflation: boolean;
  sources: Source[];
  allSources: Source[];
  key: string;
  http: HttpClient;
  url: string;
  constructor(
    private fb: FormBuilder, public dialogRef: MatDialogRef<EditMetricDialogComponent>, public sourceDialog: MatDialog, @Inject(MAT_DIALOG_DATA) public _data: ModalData)  {
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
      this.data = new Array<Array<ChartData>>();
      var temp1 = new Array<ChartData>();
      for (var i = 0; i < this.metric.data.length; i++) {
        var d = new ChartData();
        d.Year = this.metric.data[i].x;
        d.Staging = this.metric.data[i].y
        temp1.push(d);
      }
      this.data.push(temp1)
      if (this.scraped) {
        if (this.scraped.Data && this.scraped.Data.length != 0) {
          this.scraped.Name = this.scraped.Name + "-- scraped"
          var temp2 = new Array<ChartData>();
          for (var i = 0; i < this.scraped.Data.length; i++) {
            var d = new ChartData();
            d.Year = this.scraped.Data[i].Key;
            d.Scraped = this.scraped.Data[i].Value;
            temp2.push(d);
          }
          this.data.push(temp2)
            
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
    this.metric.available_adjustments.forEach((item, index) => {
      if (item === a) this.metric.available_adjustments.splice(index, 1);
    });
    console.log(a.id);
    if (a.id == "inflation") {
      this.hasInflation = false;
    }
    
  }
  addInflation() {
    var adj = new Adjustment();
    adj.id = "inflation";
    adj.name = "Adjust for inflation";
      this.metric.available_adjustments.push(adj);
      this.hasInflation = true;
    
  }

  addSources() {

    if (this.sources.length != 0) {
      for (var i = 0; i < this.metric.sources.length; i++) {
        var data = this.allSources.filter(s => s.key != this.metric.sources[i]);
      }
    }
    else {
      var data = this.allSources;
    }
    let d = this.sourceDialog.open(AddSourceDialogComponent,
      {
        panelClass: 'mat-dialog-lg',
        width: '70%',
        height: '55%',
        data

      });
    d.afterClosed().subscribe(result => {
      if (result != null) {
        if (result.num == 0) {
          var includeChildren = false;
        }
        else {
          var includeChildren = true;
        }
        let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
        this.http.put(this.url + "/metrics/" + this.metric.id + "/AddSource/" + result.source.key + "?IncludeChildren=" + includeChildren, '', { headers: header }).subscribe(data => {
          console.log("source deletion success")
          if (!this.metric.sources || this.metric.sources.length == 0)
            this.metric.sources = [];

          this.metric.sources.push(result.source.key);
          if (!this.sources || this.sources.length == 0)
            this.sources = [];

          for (let id of this.metric.sources) {
            let s = this.allSources.filter(f => f.key == id);
            if (s)
              this.sources.push(s[0]);
          }
        },
          error => {
            console.log("source deletion failure");
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
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
    await this.http.put(this.url + "/metrics/" + this.metric.id + "/RemoveSource/" + s.key + "?IncludeChildren=" + includeChildren, '', { headers: header }).subscribe(data => {
      console.log("source deletion success")
      this.sources.splice(this.sources.indexOf(s), 1);
      this.metric.sources.splice(this.metric.sources.indexOf(s.key), 1);
    },
      error => {
        console.log("source deletion failure");
      })
  }
  
}


