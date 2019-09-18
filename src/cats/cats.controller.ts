import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Redirect,
  Param,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(418)
  foo(@Req() request: Request): string {
    return 'all the cats!';
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
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
