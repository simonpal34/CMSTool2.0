import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceMaster } from '../../services/serviceMaster'
import { Metric } from '../../Models/Metric';
import { MyActions } from '../../Models/Profile';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  sourceSelectForm: FormGroup;
  selected: boolean;
  displayedColumnsModified = ['name', 'last_modified', 'last_published'];
  displayedColumnsPublished = ['name', 'last_modified', 'last_published'];
  displayedColumnsMyActions = ['action', 'date', 'status', 'metric'];
  constructor(fb: FormBuilder, private svc: ServiceMaster ) {

    this.selected = false;
    this.sourceSelectForm = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

    this.svc.kpiService.getModified().then(response => {
      this.svc.kpi_modified = response;
    });

    this.svc.kpiService.getPublished().then(response => {
      this.svc.kpi_published = response;
    });

    this.svc.kpiService.getActivityLog().then(response => {
      this.svc.kpi_activity_log = response;
    });
  }
}
