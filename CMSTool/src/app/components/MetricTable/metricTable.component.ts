import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';


@Component({
  selector: 'metric-table',
  templateUrl: './metricTable.component.html',
})
export class MetricTableComponent {
  displayedColumns: string[] = ['child', 'name'];
  constructor(private svc: ServiceMaster) {

  }


}
