import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    
  }

  @Get('todos')
  public getData() {
    return this.appService.getData();
  }

  @Post('addTodo')
  public addTodo() {
    return this.appService.addTodo();
  }
}
