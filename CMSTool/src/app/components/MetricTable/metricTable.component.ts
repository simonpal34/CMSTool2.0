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
    if (this.svc.missionBreadCrumb.id == -1) {
      this.svc.missionService.getStagingMissionBreadcrumb(m.ancestry.mission.toString()).then(result => {
        this.svc.missionBreadCrumb = result;
        this.svc.reportingUnitBreadCrumb = this.svc.missionBreadCrumb.reporting_units.find(r => r.id == m.ancestry.reporting_unit);
        this.svc.topicBreadCrumb = this.svc.reportingUnitBreadCrumb.topics.find(t => t.id == m.ancestry.topic)
      })
    }
    this.svc.stagingMetrics = [m];
    this.svc.trendToChildren(m);
  }

}
