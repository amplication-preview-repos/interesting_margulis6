import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostStatsService } from "./postStats.service";
import { PostStatsControllerBase } from "./base/postStats.controller.base";

@swagger.ApiTags("postStats")
@common.Controller("postStats")
export class PostStatsController extends PostStatsControllerBase {
  constructor(protected readonly service: PostStatsService) {
    super(service);
  }
}
