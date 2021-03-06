import { NgxSpinnerService } from 'ngx-spinner';
import { Source } from './Source';
import { AddSourceDialogComponent } from '../components/MetricTable/add-source-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Notification } from './ActivityLog';
import { Base } from './Base';

export class Metric extends Base {
  public name: string;
  public lexicon_name: string;
  public is_featured: boolean;
  public is_displayed: boolean;
  public rounding_units: number;
  public sig_figs: number;
  public x: number[];
  public x_type: string;
  public y: number[];
  public y_type: string;
  public y_label: string;
  public slideID: number;
  public slideTitle: string;
  public children: number[];
  public hasChildren: boolean;
  public meta: Meta[];
  public sources: string[];
  public checked: boolean;
  public sequence: number;
  public ancestry: Ancestry;
  public data: Data[];
  public available_adjustments: Adjustment[];
  public modified_by: string;
  public modified_on: Date;
  public LastUpdatedFromScraper: Date;
  public LastPushedIntoProduction: Date;
  public application_type: number;
}
export class Adjustment extends Base {
  public name: string
}

export class Meta extends Base{
  public type: string;
  public data: string;

}
export class Data
{
    public x: string;
    public y: number;
}

export class Ancestry {
  ancestor_metrics: number[];
  mission: number;
  reporting_unit: number;
  topic: number;
}

export class ModalData {
  public metric: Metric;
  public scraped: Metric;
  public spinner: NgxSpinnerService;
  public sources: Source[];
  public allSources: Source[];
  public key: string;
  public url: string;
  public http: HttpClient;
  public published: Metric;
  public notifications: Notification[];
}


export class ChartData {
  public data: number[];
  public label: string;

}
