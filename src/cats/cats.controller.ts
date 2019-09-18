import { Controller, Get, Req, Post, HttpCode, Redirect } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(418)
  foo(@Req() request: Request): string {
    return 'all the cats!';
  }

  @Post()
  create(): string {
    return 'would make a cat';
  }

  @Get('redirectme')
  @Redirect('http://chirgwin.net', 301)
  neverun() {}
}
