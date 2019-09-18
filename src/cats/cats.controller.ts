import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  foo(@Req() request: Request): string {
    console.log(request);
    return 'asdfasdfa';
  }
}
