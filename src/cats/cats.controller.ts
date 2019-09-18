import { Controller, Get, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  foo(@Req() request: Request): string {
    return 'This actiasdfasdfon returns all cats';
  }
}
