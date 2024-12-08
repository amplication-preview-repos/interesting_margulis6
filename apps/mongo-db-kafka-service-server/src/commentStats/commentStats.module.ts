import { Module } from "@nestjs/common";
import { CommentStatsModuleBase } from "./base/commentStats.module.base";
import { CommentStatsService } from "./commentStats.service";
import { CommentStatsController } from "./commentStats.controller";
import { CommentStatsResolver } from "./commentStats.resolver";

@Module({
  imports: [CommentStatsModuleBase],
  controllers: [CommentStatsController],
  providers: [CommentStatsService, CommentStatsResolver],
  exports: [CommentStatsService],
})
export class CommentStatsModule {}
