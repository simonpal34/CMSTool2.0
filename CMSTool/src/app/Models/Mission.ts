import { ReportingUnit } from './ReportingUnit';
import { Base } from './Base';

export class Mission extends Base{
    public name: string;
    public metrics: number[];
    public applicationType: number;
  public reporting_units: ReportingUnit[];
}
