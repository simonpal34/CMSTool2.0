import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { ReportingUnit } from '../../Models/ReportingUnit';


@Component({
  selector: 'reporting-unit-table',
  templateUrl: './reportingUnitTable.component.html',
})
export class ReportingUnitTableComponent {
  displayedColumns: string[] = ['child', 'name'];
  constructor(private svc: ServiceMaster) {

  }

  selectReportingUnit(reportingUnit: ReportingUnit) {
    this.svc.stagingReportingUnits = [reportingUnit];
    this.svc.getTopics();
  }

}
