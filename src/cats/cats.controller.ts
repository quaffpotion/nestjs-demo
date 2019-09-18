import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Redirect,
  Param,
} from '@nestjs/common';
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
  neverun() {
    return 'never foudn';
  }

  //localhost:3000/cats/thisFRO/1
  @Get('this:name/:id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a cat named ${params.name} with id ${
      params.id
    }.`;
  }
}
