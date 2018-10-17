import { Notification } from "./ActivityLog";

export class Source {
    AgencyName: string;
    TableOrFileName: string;
    Url: string;
    UrlDownload: string;
    LastUpdated: string;
    UpdateSchedule: string;
    YearType: string;
    id: number;
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
}
