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
  displayedColumns: string[] = ['agency','name', 'tableOrFile', 'edit', 'add', 'addChildren'];
  key: string;
  constructor(
    private fb: FormBuilder, public toastr: ToastrManager, public dialogRef: MatDialogRef<AddSourceDialogComponent>, public editDialog: MatDialog, public http: HttpClient, @Inject(MAT_DIALOG_DATA) public data: AddModel) {
    this.sourcesForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.key = data.key;
    this.allSources = data.AllSources;
    this.hasChildren = data.hasChildren;
    var curr = this.allSources.map(d => d.AgencyName);
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
    let d = this.editDialog.open(EditSourceDialogComponent,
      {
        panelClass: 'mat-dialog-lg',
        data: s,
        width: '75%',
        height: '75%',

      });
    d.afterClosed().subscribe(result => {
      if (result != null) {
       
        let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
        var response = false;
        var body = JSON.stringify(result);
        this.http.put<Source>('https://usafacts-api-staging.azurewebsites.net/api/v2' + "/sources", body, { headers: header }).toPromise().then(response => {
          this.toastr.successToastr(result.name + ' edit complete', 'Success!');
          s = result;
          var temp = Object.assign([], this.selectedSources);
          var i = temp.findIndex(src => src.key == s.key);
          temp[i] = result;
          this.selectedSources = Object.assign([], temp);
        }).catch(error => {
          this.toastr.errorToastr('Edit Failed!', 'Oops!');
          })
       
      }
      else {
      }
    });
  }

  newSource() {
    var s = new Source();
    s.AgencyName = '';
    let d = this.editDialog.open(EditSourceDialogComponent,
      {
        panelClass: 'mat-dialog-lg',
        data: s,
        width: '75%',
        height: '75%',

      });
    d.afterClosed().subscribe(result => {
      if (result != null) {
        let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.key });
        var body = JSON.stringify(result);
        this.http.put<Source>('https://usafacts-api-staging.azurewebsites.net/api/v2' + "/sources", body, { headers: header }).toPromise().then(response => {
          this.toastr.successToastr(result.name + ' was added', 'Success!');
          var temp = Object.assign([], this.allSources);
          temp.push(response);
          this.allSources = Object.assign([], temp);
            var curr = this.allSources.map(d => d.AgencyName);
            this.uniqueSources = curr.filter(function (el, i, arr) {
              return arr.indexOf(el) == i;
            });
            this.selectedSource = '';
            this.selectedSources = [];
        }).catch(error => {
            this.toastr.errorToastr('Add Failed!', 'Oops!');

        });
      }
    });
  }
 
}
