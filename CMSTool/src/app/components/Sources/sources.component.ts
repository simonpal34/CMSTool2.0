import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceMaster } from '../../services/serviceMaster'
import { Metric } from '../../Models/Metric';
import { Source } from '../../Models/Source';


@Component({
  selector: 'sources',
  templateUrl: './sources.component.html'
})
export class SourcesComponent {
  sourceSelectForm: FormGroup;
  selected: boolean;
  constructor(fb: FormBuilder, private svc: ServiceMaster) {

    if (this.svc.uniqueSources == null) {
      this.svc.getAllSources();
    }
    this.selected = false;
    this.svc.sourcesTabSelectedSource = "";
    this.sourceSelectForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
  selectSource() {
    this.svc.sourcesTabSelectedSources = this.svc.allSources.filter(s => s.AgencyName == this.svc.sourcesTabSelectedSource);
    this.selected = true;
  }

  addSource() {
    var s = new Source();
    s.AgencyName = "";
    this.svc.openSourceEdit(s);
  }
}

