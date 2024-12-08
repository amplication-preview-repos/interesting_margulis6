import { PostStats as TPostStats } from "../api/postStats/PostStats";

export const POSTSTATS_TITLE_FIELD = "id";

export const PostStatsTitle = (record: TPostStats): string => {
  return record.id?.toString() || String(record.id);
};
