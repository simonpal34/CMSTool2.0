import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric } from '../../Models/Metric';
import { Topic } from '../../Models/Topic';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source } from '../../Models/Source';

@Component({
  selector: 'source-table',
  templateUrl: './sourceTable.component.html',
})
export class SourceTableComponent {
  displayedColumns: string[] = ['name', 'tableOrFile', 'url', 'urlDownload', 'lastUpdated', 'metrics', 'edit', 'delete'];
  constructor(private svc: ServiceMaster, private spinner: NgxSpinnerService) {
    

  }
  edit(s: Source) {
    this.svc.openSourceEdit(s);
  }

  delete(s: Source) {
    this.svc.deleteSource(s);
  }
}
