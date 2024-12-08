import { Module } from "@nestjs/common";
import { PostStatsModuleBase } from "./base/postStats.module.base";
import { PostStatsService } from "./postStats.service";
import { PostStatsController } from "./postStats.controller";
import { PostStatsResolver } from "./postStats.resolver";

@Module({
  imports: [PostStatsModuleBase],
  controllers: [PostStatsController],
  providers: [PostStatsService, PostStatsResolver],
  exports: [PostStatsService],
})
export class PostStatsModule {}
