import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric } from '../../Models/Metric';

@Component({
  selector: 'children-table',
  templateUrl: './childrenTable.component.html',
})
export class ChildrenTableComponent {
  displayedColumns: string[] = ['child', 'name', 'last_modified', 'last_published', 'edit', 'publish'];
  constructor(private svc: ServiceMaster) {

  }
  openEdit(metric: Metric) {
    this.svc.getChildMetricEdit(metric)
  }

  trendToChildren(m: Metric) {
    this.svc.stagingMetrics = [m];
    this.svc.trendToChildren(m);
  }

}
