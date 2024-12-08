import { PostStatsWhereInput } from "./PostStatsWhereInput";
import { PostStatsOrderByInput } from "./PostStatsOrderByInput";

export type PostStatsFindManyArgs = {
  where?: PostStatsWhereInput;
  orderBy?: Array<PostStatsOrderByInput>;
  skip?: number;
  take?: number;
};
