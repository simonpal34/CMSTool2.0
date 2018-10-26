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
  adding: boolean;
  constructor(
    private fb: FormBuilder, public toastr: ToastrManager, public dialogRef: MatDialogRef<AddMetaDataDialogComponent>, public addDialog: MatDialog, @Inject(MAT_DIALOG_DATA) public _data: Meta) {
    this.metaDataForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.meta = _data;
    if (this.meta.data == "") {
      this.adding = true;
    }
    else {
      this.adding = false;
    }
  }
  cancel() {
    this.dialogRef.close(null);
  }
  save() {
    this.dialogRef.close(this.meta);
  }
  add(children: boolean) {
    {
      this.dialogRef.close({m: this.meta, c: children})
    }
  }
 
}
