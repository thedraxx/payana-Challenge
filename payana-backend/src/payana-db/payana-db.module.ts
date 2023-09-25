import { Module } from '@nestjs/common';
import { PayanaDbService } from './payana-db.service';
import { PayanaDbController } from './payana-db.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PayanaDbSchema, PayanaDb } from './entities/payana-db.entity';

@Module({
  controllers: [PayanaDbController],
  providers: [PayanaDbService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: PayanaDb.name,
        schema: PayanaDbSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class PayanaDbModule {}
