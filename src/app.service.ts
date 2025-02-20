import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We love NestJS';
  }

  getName(): string {
    return 'Xiao Ma';
  }

  showInfo(): string {
    return 'I am Xiao Ma ,19 years old';
  }

  getJSON() {
    return {
      name: 'Xiao',
      lastname: 'Ma',
      age: 19,
    };
  }

  myJOSN() {
    return {
      name: 'Xiao',
      lastname: 'Ma',
      age: 19,
    };
  }

  showGithub() {
    return 'Github testing';
  }
  usepostman(): string {
    return 'we use postman xxx';
  }
}
