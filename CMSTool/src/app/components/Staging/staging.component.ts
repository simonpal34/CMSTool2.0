import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceMaster } from '../../services/serviceMaster'


@Component({
  selector: 'staging',
  templateUrl: './staging.component.html'
})
export class StagingComponent {
  search: FormGroup;
  SearchID: string
  constructor(fb: FormBuilder, private svc: ServiceMaster ) {
    this.search = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.SearchID = "";
  }

  clear() {
    this.svc.getMissions();
    this.SearchID = "";
  }
goToMission()
{
  this.svc.stagingMissions = [this.svc.missionBreadCrumb];
  this.svc.stagingMissions[0].applicationType = 1;
  this.svc.getReportingUnits();
  this.SearchID = "";
  }

  goToReportingUnit()
  {
    this.svc.stagingReportingUnits = [this.svc.reportingUnitBreadCrumb];
    this.svc.getTopics();
    this.SearchID = "";
  }

  getSearch() {
    this.svc.searchStaging(this.SearchID);
  }
}
