import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceMaster } from '../../services/serviceMaster'

@Component({
  selector: 'export',
  templateUrl: './export.component.html'
})

export class ExportComponent {
  constructor(fb: FormBuilder, private svc: ServiceMaster) {
  }

    chooseFile(newFile: any)
    {
         var selectedSheet = newFile.path[0].files[0];
    }
}

