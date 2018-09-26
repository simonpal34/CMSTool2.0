import { Component, ViewChild } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric } from '../../Models/Metric';
import { Topic } from '../../Models/Topic';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source } from '../../Models/Source';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FileUpload } from '../../Models/SpreadSheet';

@Component({
  selector: 'file-table',
  templateUrl: './fileTable.component.html',
})
export class FileTableComponent {
  displayedColumns: string[] = ['fileType', 'name', 'status', 'uploadedBy'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<FileUpload>;
  constructor(private svc: ServiceMaster, private spinner: NgxSpinnerService) {
    this.svc.getUploaded();
    this.dataSource = new MatTableDataSource<FileUpload>(this.svc.uploaded);
    this.dataSource.paginator = this.paginator;

  }

}
