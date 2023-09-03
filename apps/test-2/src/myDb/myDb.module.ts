import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MyDbModuleBase } from "./base/myDb.module.base";
import { MyDbService } from "./myDb.service";
import { MyDbController } from "./myDb.controller";
import { MyDbResolver } from "./myDb.resolver";

@Module({
  imports: [MyDbModuleBase, forwardRef(() => AuthModule)],
  controllers: [MyDbController],
  providers: [MyDbService, MyDbResolver],
  exports: [MyDbService],
})
export class MyDbModule {}
