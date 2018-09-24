import { Component, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric, Meta, ModalData, ChartData, ScrapedMetric, Adjustment } from '../../Models/Metric';
import { forEach } from '@angular/router/src/utils/collection';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source } from '../../Models/Source';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'edit-source-dialog',
  templateUrl: 'edit-source-dialog.component.html',
})
export class EditSourceDialogComponent {
  sourceForm: FormGroup;
  source: Source;
  constructor(
    private fb: FormBuilder, public dialogRef: MatDialogRef<EditSourceDialogComponent>, public sourceDialog: MatDialog, @Inject(MAT_DIALOG_DATA) public _source: Source) {
    this.sourceForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.source = _source;
    console.log(this.source.AgencyName)
  }


}
