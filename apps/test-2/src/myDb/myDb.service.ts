import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MyDbServiceBase } from "./base/myDb.service.base";

@Injectable()
export class MyDbService extends MyDbServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
