import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Topic } from '../../Models/Topic';


@Component({
  selector: 'export-table',
  templateUrl: './exportTable.component.html',
})
export class ExportTableComponent {
  displayedColumns: string[] = ['child', 'name'];
  constructor(private svc: ServiceMaster) {

  }
}
