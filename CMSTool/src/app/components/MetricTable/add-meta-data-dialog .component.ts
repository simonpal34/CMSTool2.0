import { Component, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric, Meta, ModalData, ChartData, ScrapedMetric, Adjustment } from '../../Models/Metric';
import { forEach } from '@angular/router/src/utils/collection';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source, AddModel } from '../../Models/Source';
import { EditSourceDialogComponent } from '../SourceTable/edit-source-dialog.component';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Notification } from '../../Models/ActivityLog';

@Component({
  selector: 'add-meta-data-dialog',
  templateUrl: 'add-meta-data-dialog.component.html',
})
export class AddMetaDataDialogComponent {
  metaDataForm: FormGroup;
  typeOptions: string[] = ["Definition", "Footnote"];
  meta: Meta;
  constructor(
    private fb: FormBuilder, public toastr: ToastrManager, public dialogRef: MatDialogRef<AddMetaDataDialogComponent>, public addDialog: MatDialog) {
    this.metaDataForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.meta = new Meta();
    this.meta.type = "";
    this.meta.data = "";
  }
  cancel() {
    this.dialogRef.close(null);
  }
  add() {
    this.dialogRef.close(this.meta);
  }
 
}
