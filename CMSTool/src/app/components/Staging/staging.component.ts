import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceMaster } from '../../services/serviceMaster'
import { Metric } from '../../Models/Metric';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'staging',
  templateUrl: './staging.component.html'
})
export class StagingComponent {
  search: FormGroup;
  SearchID: string
  constructor(fb: FormBuilder, private svc: ServiceMaster, private route: ActivatedRoute ) {
    this.search = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.SearchID = this.route.snapshot.paramMap.get('MetricID');

    if (this.SearchID != null) {
      this.getSearch();
    }
    else {
      this.SearchID = "";
      this.svc.getMissions();
      this.svc.getAllSources();
    }
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
  goToTopic() {
    this.svc.stagingTopics = [this.svc.topicBreadCrumb];
    this.svc.trendToMetrics();
    this.SearchID = "";
  }

  getSearch() {
    this.svc.searchStaging(this.SearchID);
  }

  goToMetric(m: Metric) {
    this.svc.searchStaging(m.id.toString());
  }
}
