/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CommentStats as PrismaCommentStats } from "@prisma/client";

export class CommentStatsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CommentStatsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.commentStats.count(args);
  }

  async commentStatsItems(
    args: Prisma.CommentStatsFindManyArgs
  ): Promise<PrismaCommentStats[]> {
    return this.prisma.commentStats.findMany(args);
  }
  async commentStats(
    args: Prisma.CommentStatsFindUniqueArgs
  ): Promise<PrismaCommentStats | null> {
    return this.prisma.commentStats.findUnique(args);
  }
  async createCommentStats(
    args: Prisma.CommentStatsCreateArgs
  ): Promise<PrismaCommentStats> {
    return this.prisma.commentStats.create(args);
  }
  async updateCommentStats(
    args: Prisma.CommentStatsUpdateArgs
  ): Promise<PrismaCommentStats> {
    return this.prisma.commentStats.update(args);
  }
  async deleteCommentStats(
    args: Prisma.CommentStatsDeleteArgs
  ): Promise<PrismaCommentStats> {
    return this.prisma.commentStats.delete(args);
  }
}