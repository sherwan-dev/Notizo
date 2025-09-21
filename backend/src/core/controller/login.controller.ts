import { Controller, Get, Post, Request, Body } from "@nestjs/common";
import { LoginService } from "../auth/services/login.service"
import { LoginDto } from "../dto/loginDto.dto";

@Controller("login")
export class LoginController {
  constructor(private readonly loginService: LoginService) { }
 

  @Post()
  loginData(@Body() data: LoginDto): void {
    console.log("Data from vue: ",data);
  }

}
 