import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric } from '../../Models/Metric';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'children-table',
  templateUrl: './childrenTable.component.html',
})
export class ChildrenTableComponent {
  displayedColumns: string[] = ['child', 'name', 'last_modified', 'last_published', 'edit', 'download', 'staging_link', 'production_link', 'publish'];
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
  publishMetric(m: Metric, n: number) {

    if (n == 0) {
      this.svc.publishMetric(m, false);
    }
    else {
      this.svc.publishMetric(m, true);
    }
  }

  export(m: Metric) {
    this.spinner.show();
    this.svc.stagingMetricService.exportMetric(m, this.spinner);
  }

  clickStaging(m: Metric) {
    window.open("https://usafacts.org/metrics/" + m.id + "?api=staging", "_blank");
  }

  clickProduction(m: Metric) {
    window.open("https://usafacts.org/metrics/" + m.id, "_blank");
  }
}
