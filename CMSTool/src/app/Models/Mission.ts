import { ReportingUnit } from './ReportingUnit';

export class Mission {
    public id: number;
    public name: string;
    public metrics: number[];
    public applicationType: number;
  public reporting_units: ReportingUnit[];
}
