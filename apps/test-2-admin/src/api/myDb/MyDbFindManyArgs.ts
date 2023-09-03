import { MyDbWhereInput } from "./MyDbWhereInput";
import { MyDbOrderByInput } from "./MyDbOrderByInput";

export type MyDbFindManyArgs = {
  where?: MyDbWhereInput;
  orderBy?: Array<MyDbOrderByInput>;
  skip?: number;
  take?: number;
};
