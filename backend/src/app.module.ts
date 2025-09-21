import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthonticationModule} from './core/auth/authentication.module'

@Module({
  imports: [AuthonticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
