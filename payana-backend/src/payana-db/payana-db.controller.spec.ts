import { Test, TestingModule } from '@nestjs/testing';
import { PayanaDbController } from './payana-db.controller';
import { PayanaDbService } from './payana-db.service';

describe('PayanaDbController', () => {
  let controller: PayanaDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PayanaDbController],
      providers: [PayanaDbService],
    }).compile();

    controller = module.get<PayanaDbController>(PayanaDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
