import { Base } from "./Base";

export class ActivityLog extends Base{
  public name: string;
  public Action: string;
  public Result: string;
  public CreatedUtc: Date;
}
export class Notification {
  name: string;
  date: Date;
  success: boolean;
}
