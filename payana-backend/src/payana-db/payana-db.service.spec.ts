import { Test, TestingModule } from '@nestjs/testing';
import { PayanaDbService } from './payana-db.service';

describe('PayanaDbService', () => {
  let service: PayanaDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayanaDbService],
    }).compile();

    service = module.get<PayanaDbService>(PayanaDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
