import { Injectable } from "@nestjs/common";


@Injectable()
export class LoginService{
    constructor(){}

    halloWorld(){
        return "Hallo World...."
    }
}