import { Component, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric, Meta, ModalData, ChartData, ScrapedMetric } from '../../Models/Metric';
import { forEach } from '@angular/router/src/utils/collection';


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
  constructor(
    private fb: FormBuilder, public dialogRef: MatDialogRef<EditMetricDialogComponent>, @Inject(MAT_DIALOG_DATA) public _data: ModalData) {
    
    this.metricForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.metric = _data.metric;
    this.scraped = _data.scraped;
    
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

}
