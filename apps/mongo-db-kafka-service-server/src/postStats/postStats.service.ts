import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostStatsServiceBase } from "./base/postStats.service.base";

@Injectable()
export class PostStatsService extends PostStatsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
