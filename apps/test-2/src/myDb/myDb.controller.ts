import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MyDbService } from "./myDb.service";
import { MyDbControllerBase } from "./base/myDb.controller.base";

@swagger.ApiTags("myDbs")
@common.Controller("myDbs")
export class MyDbController extends MyDbControllerBase {
  constructor(
    protected readonly service: MyDbService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
