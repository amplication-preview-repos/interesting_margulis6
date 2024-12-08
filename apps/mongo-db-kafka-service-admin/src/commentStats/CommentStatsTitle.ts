import { CommentStats as TCommentStats } from "../api/commentStats/CommentStats";

export const COMMENTSTATS_TITLE_FIELD = "id";

export const CommentStatsTitle = (record: TCommentStats): string => {
  return record.id?.toString() || String(record.id);
};
