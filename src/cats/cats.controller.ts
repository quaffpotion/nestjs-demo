import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  foo(): string {
    return 'This actiasdfasdfon returns all cats';
  }
}
