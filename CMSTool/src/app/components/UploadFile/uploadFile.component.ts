import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceMaster } from '../../services/serviceMaster'
import { Metric } from '../../Models/Metric';
import { SpreadSheet } from '../../Models/SpreadSheet';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'uploadFile',
  templateUrl: './uploadFile.component.html'
})
export class UploadFileComponent {
  uploadForm: FormGroup;
  selectedType: SpreadSheet;
  selectedSheet: File;
  constructor(fb: FormBuilder, private svc: ServiceMaster, public toastr: ToastrManager ) {
    this.uploadForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.selectedType = new SpreadSheet();
    this.selectedType.id = "-1";
    this.svc.getSpreadSheets();
  }
  onSelect(newSheet: SpreadSheet) {
    this.selectedType = newSheet;
  }
  chooseFile(newFile: any) {
    this.selectedSheet = newFile.path[0].files[0];
  }
  upload() {
    if (this.selectedType.id != "-1") {
      this.svc.upload(this.selectedSheet, this.selectedType);
    }
    else {
      this.toastr.errorToastr('Select Sheet Type!', 'Oops!');
    }
  }

 
}
