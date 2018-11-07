import { Base } from "../Models/Base";

export interface Serializer {
  fromJson(json: any): Base;
  toJson(base: Base): any;
}
