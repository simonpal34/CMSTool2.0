import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric } from '../../Models/Metric';
import { Topic } from '../../Models/Topic';

@Component({
  selector: 'metric-table',
  templateUrl: './metricTable.component.html',
})
export class MetricTableComponent {
  displayedColumns: string[] = ['child', 'name', 'last_modified','last_published', 'edit', 'publish'];
  constructor(private svc: ServiceMaster) {

  }
  openEdit(metric: Metric) {
    this.svc.getParentMetricEdit(metric);
  }

  trendToChildren(m: Metric) {
    if (this.svc.stagingTopics[0].id != -1) {
      this.svc.topicBreadCrumb = this.svc.stagingTopics[0];
      var t = new Topic();
      t.id = -1;
      this.svc.stagingTopics = [t];
    }
    this.svc.stagingMetrics = [m];
    this.svc.trendToChildren(m);
  }

}
