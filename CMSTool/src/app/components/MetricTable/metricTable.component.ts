import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric } from '../../Models/Metric';

@Component({
  selector: 'metric-table',
  templateUrl: './metricTable.component.html',
})
export class MetricTableComponent {
  displayedColumns: string[] = ['child', 'name', 'last_modified','last_published', 'edit', 'publish'];
  constructor(private svc: ServiceMaster) {

  }
  openEdit(metric: Metric) {
    this.svc.getMetricEdit(metric);
  }

}
