import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PsicologosService } from './psicologos.service';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';

@Controller('psicologos')
export class PsicologosController {
  constructor(private readonly psicologosService: PsicologosService) {}

  @Post()
  create(@Body() createPsicologoDto: CreatePsicologoDto) {
    return this.psicologosService.create(createPsicologoDto);
  }

  @Get()
  findAll() {
    return this.psicologosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.psicologosService.findOne(id);
  }

}
