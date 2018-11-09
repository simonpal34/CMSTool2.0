import { Notification } from "./ActivityLog";
import { Base } from "./Base";

export class Source extends Base{
    AgencyName: string;
    TableOrFileName: string;
    Url: string;
    UrlDownload: string;
    LastUpdated: string;
    UpdateSchedule: string;
    YearType: string;
    key: string;
    name: string;
    description: string;
    Metrics: number[];
}

export class AddModel {
  AllSources: Source[];
  hasChildren: boolean;
  public key: string;
  notifications: Notification[];
}
export class SourceEditModel {
  s: Source;
  unique: string[];
  add: boolean;
}
