import { Module } from '@nestjs/common';
import { PayanaDbService } from './payana-db.service';
import { PayanaDbController } from './payana-db.controller';

@Module({
  controllers: [PayanaDbController],
  providers: [PayanaDbService],
  exports: [PayanaDbService],
})
export class PayanaDbModule {}
