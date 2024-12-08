import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommentStatsService } from "./commentStats.service";
import { CommentStatsControllerBase } from "./base/commentStats.controller.base";

@swagger.ApiTags("commentStats")
@common.Controller("commentStats")
export class CommentStatsController extends CommentStatsControllerBase {
  constructor(protected readonly service: CommentStatsService) {
    super(service);
  }
}
