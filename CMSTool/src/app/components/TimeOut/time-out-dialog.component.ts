import { Component, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric, Meta, ModalData, ChartData, ScrapedMetric, Adjustment } from '../../Models/Metric';
import { forEach } from '@angular/router/src/utils/collection';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source, SourceEditModel } from '../../Models/Source';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'time-out-dialog',
  templateUrl: 'time-out-dialog.component.html',
})
export class TimeOutDialogComponent {
  
  constructor(
    private fb: FormBuilder, public dialogRef: MatDialogRef<TimeOutDialogComponent>) {
    
  }
  close() {
    
    this.dialogRef.close(null);
  }


}
