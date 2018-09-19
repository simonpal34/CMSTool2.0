import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric } from '../../Models/Metric';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'children-table',
  templateUrl: './childrenTable.component.html',
})
export class ChildrenTableComponent {
  displayedColumns: string[] = ['child', 'name', 'last_modified', 'last_published', 'edit', 'publish'];
  constructor(private svc: ServiceMaster, private spinner: NgxSpinnerService) {

  }
  openEdit(metric: Metric) {
    this.spinner.show();
    this.svc.getChildMetricEdit(metric, this.spinner)
  }

  trendToChildren(m: Metric) {
    this.svc.stagingMetrics = [m];
    this.svc.trendToChildren(m);
  }

}
