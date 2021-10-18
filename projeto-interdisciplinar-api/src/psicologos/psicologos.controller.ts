import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PsicologosService } from './psicologos.service';
import { CreatePsicologoDto } from './dto/create-psicologo.dto';
import { UpdatePsicologoDto } from './dto/update-psicologo.dto';

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
    return this.psicologosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsicologoDto: UpdatePsicologoDto) {
    return this.psicologosService.update(+id, updatePsicologoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.psicologosService.remove(+id);
  }
}
