import { Topic } from './Topic';
import { Base } from './Base';

export class ReportingUnit extends Base{
  public name: string;
  public topics: Topic[];
}
