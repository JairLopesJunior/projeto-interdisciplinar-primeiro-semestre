import { Module } from '@nestjs/common';
import { PsicologosService } from './psicologos.service';
import { PsicologosController } from './psicologos.controller';

@Module({
  controllers: [PsicologosController],
  providers: [PsicologosService]
})
export class PsicologosModule {}
