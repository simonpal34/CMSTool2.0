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
}
