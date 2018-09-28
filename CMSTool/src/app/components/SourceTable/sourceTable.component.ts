import { Component } from '@angular/core';
import { ServiceMaster } from '../../services/serviceMaster';
import { Metric } from '../../Models/Metric';
import { Topic } from '../../Models/Topic';
import { NgxSpinnerService } from 'ngx-spinner';
import { Source } from '../../Models/Source';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'source-table',
  templateUrl: './sourceTable.component.html',
})
export class SourceTableComponent {
  displayedColumns: string[] = ['name', 'tableOrFile', 'url', 'urlDownload', 'lastUpdated', 'metrics', 'edit', 'delete'];
  constructor(private svc: ServiceMaster, private spinner: NgxSpinnerService, public snackBar: MatSnackBar) {
    

  }
  edit(s: Source) {
    this.svc.openSourceEdit(s, false);
  }

  delete(s: Source) {
    let snackBarRef = this.snackBar.open('Are you sure you want to Delete ' + s.name, 'Yes', {
      duration: 3000
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
      this.svc.deleteSource(s);
    });

    
  }
}
