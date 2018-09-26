import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceMaster } from '../../services/serviceMaster'
import { Metric } from '../../Models/Metric';
import { SpreadSheet } from '../../Models/SpreadSheet';


@Component({
  selector: 'uploadFile',
  templateUrl: './uploadFile.component.html'
})
export class UploadFileComponent {
  uploadForm: FormGroup;
  selectedType: SpreadSheet;
  constructor(fb: FormBuilder, private svc: ServiceMaster ) {
    this.uploadForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.selectedType = new SpreadSheet();
    this.svc.getSpreadSheets();
  }

 
}
