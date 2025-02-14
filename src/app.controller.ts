import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/showname')
  showName(): string {
    return this.appService.getName();
  }

  @Get('/showinformation')
  showInfo(): string {
    return this.appService.showInfo();
  }

  @Get('/showJson')
  getJSON() {
    return this.appService.getJSON();
  }

  @Get('/showgithub')
  Github(): string {
    return this.appService.showGithub();
  }
}
