import { Component, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric, Meta, ModalData, ChartData, ScrapedMetric, Adjustment } from '../../Models/Metric';
import { forEach } from '@angular/router/src/utils/collection';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source, AddModel } from '../../Models/Source';
import { EditSourceDialogComponent } from '../SourceTable/edit-source-dialog.component';


@Component({
  selector: 'add-source-dialog',
  templateUrl: 'add-source-dialog.component.html',
})
export class AddSourceDialogComponent {
  uniqueSources: string[];
  sourcesForm: FormGroup;
  selectedSource: string;
  selectedSources: Source[];
  allSources: Source[];
  hasChildren: boolean;
  displayedColumns: string[] = ['agency', 'tableOrFile','edit', 'add', 'addChildren'];
  constructor(
    private fb: FormBuilder, public dialogRef: MatDialogRef<AddSourceDialogComponent>, public editDialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: AddModel) {
    this.sourcesForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.allSources = data.AllSources;
    this.hasChildren = data.hasChildren;
    var curr = this.allSources.map(d => d.AgencyName);
    console.log(this.allSources.length);
    this.uniqueSources = curr.filter(function (el, i, arr) {
      return arr.indexOf(el) == i;
    });
    this.selectedSource = this.uniqueSources[0];
    this.selectedSources = this.allSources.filter(s => s.AgencyName == this.selectedSource);
    if (this.selectedSources[0].name == "") {
      this.selectedSources = []
    }
  }

  selectSource() {
    this.selectedSources = this.allSources.filter(s => s.AgencyName == this.selectedSource);
  }

  async addSource(s: Source, n: number) {
    this.dialogRef.close({ source: s, num: n });
  }
  cancel() {
    this.dialogRef.close(null);
  }
  edit(s: Source) {
    let dialogRef = this.editDialog.open(EditSourceDialogComponent,
      {
        panelClass: 'mat-dialog-lg',
        data: s,
        width: '75%',
        height: '75%',

      });
  }
}
