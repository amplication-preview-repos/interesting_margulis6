import * as graphql from "@nestjs/graphql";
import { PostStatsResolverBase } from "./base/postStats.resolver.base";
import { PostStats } from "./base/PostStats";
import { PostStatsService } from "./postStats.service";

@graphql.Resolver(() => PostStats)
export class PostStatsResolver extends PostStatsResolverBase {
  constructor(protected readonly service: PostStatsService) {
    super(service);
  }
}
