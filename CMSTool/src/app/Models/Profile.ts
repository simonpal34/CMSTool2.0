import { Base } from "./Base";

export class Profile  extends Base{
    public FirstName: string;
    public LastName: string;
    public Email: string;
    public Password: string;
    public SessionId: string;
    public Role: string;
    public key: string;

}
export class MyActions {
  public action: string;
  public date: string;
  public status: string;
  public metric: string;
}
