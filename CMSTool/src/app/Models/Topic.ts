import { Metric } from './Metric';
import { Base } from './Base';
export class Topic extends Base{
  name: string;
  metrics: Metric[];
}
