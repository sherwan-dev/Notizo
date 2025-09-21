import { Module } from "@nestjs/common";
import {LoginService} from "./services/login.service"
import { LoginController } from "../controller/login.controller";
@Module({
  controllers: [LoginController],
  providers: [LoginService],
})
export class AuthonticationModule{}