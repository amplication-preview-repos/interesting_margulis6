import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommentStatsServiceBase } from "./base/commentStats.service.base";

@Injectable()
export class CommentStatsService extends CommentStatsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
