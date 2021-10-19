import { psicologosProviders } from './psicologos.providers';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { PsicologosService } from './psicologos.service';
import { PsicologosController } from './psicologos.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PsicologosController],
  providers: [
    ...psicologosProviders,
    PsicologosService
  ]
})
export class PsicologosModule {}
