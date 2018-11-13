import { Component, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric, Meta, ModalData, ChartData, Adjustment } from '../../Models/Metric';
import { forEach } from '@angular/router/src/utils/collection';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source, SourceEditModel } from '../../Models/Source';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'time-out-dialog',
  templateUrl: 'time-out-dialog.component.html',
})
export class TimeOutDialogComponent {
  timeLeft2: number;
  interval2: any;
  constructor(
    private fb: FormBuilder, public dialogRef: MatDialogRef<TimeOutDialogComponent>) {
    this.timeLeft2 = 120;
    this.startTimer2();
  }
  close() {
    clearInterval(this.interval2);
    this.dialogRef.close(true);
  }
  startTimer2() {
    this.interval2 = setInterval(() => {
      if (this.timeLeft2 > 0) {
        this.timeLeft2--;
        console.log(this.timeLeft2);
      } else {
        clearInterval(this.interval2);
        this.dialogRef.close(false);
        
      }
    }, 1000)
  }


}
