import { CommentStatsWhereInput } from "./CommentStatsWhereInput";
import { CommentStatsOrderByInput } from "./CommentStatsOrderByInput";

export type CommentStatsFindManyArgs = {
  where?: CommentStatsWhereInput;
  orderBy?: Array<CommentStatsOrderByInput>;
  skip?: number;
  take?: number;
};
