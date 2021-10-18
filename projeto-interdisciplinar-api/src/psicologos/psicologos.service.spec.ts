import { Test, TestingModule } from '@nestjs/testing';
import { PsicologosService } from './psicologos.service';

describe('PsicologosService', () => {
  let service: PsicologosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PsicologosService],
    }).compile();

    service = module.get<PsicologosService>(PsicologosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
