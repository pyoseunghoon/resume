import { ICommon } from '../common/ICommon';
import { IRow } from '../common/IRow';

export declare namespace IActivity {
  export interface Payload extends ICommon.Payload {
    list: Item[];
  }

  export interface Item {
    title: string;
    subTitle: string;
    descriptions?: (string | IRow.Description)[];
    startedAt: string;
    endedAt?: string;
  }
}
