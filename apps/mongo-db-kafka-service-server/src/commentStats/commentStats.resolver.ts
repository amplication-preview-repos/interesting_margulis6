import * as graphql from "@nestjs/graphql";
import { CommentStatsResolverBase } from "./base/commentStats.resolver.base";
import { CommentStats } from "./base/CommentStats";
import { CommentStatsService } from "./commentStats.service";

@graphql.Resolver(() => CommentStats)
export class CommentStatsResolver extends CommentStatsResolverBase {
  constructor(protected readonly service: CommentStatsService) {
    super(service);
  }
}
