import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceMaster } from '../../services/serviceMaster'


@Component({
  selector: 'staging',
  templateUrl: './staging.component.html'
})
export class StagingComponent {
  search: FormGroup;
  SearchID: String
  constructor(fb: FormBuilder, private svc: ServiceMaster ) {
    this.search = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.SearchID = "";
  }

  clear() {
    this.svc.getMissions();
  }
goToMission()
{
  this.svc.stagingMissions = [this.svc.missionBreadCrumb];
  this.svc.getReportingUnits();
}
}
