import { Base } from "./Base";

export class SpreadSheet extends Base{
  public SheetName: string;
}
export class FileUpload extends Base{
  public FileType: string;
  public UploadedBy: string;
  public UploadedTime: Date;
  public name: string;
  public Status: number;
  public ErrorDetails: string;
}
