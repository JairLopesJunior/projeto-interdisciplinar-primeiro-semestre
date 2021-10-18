import { Test, TestingModule } from '@nestjs/testing';
import { PsicologosController } from './psicologos.controller';
import { PsicologosService } from './psicologos.service';

describe('PsicologosController', () => {
  let controller: PsicologosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PsicologosController],
      providers: [PsicologosService],
    }).compile();

    controller = module.get<PsicologosController>(PsicologosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
