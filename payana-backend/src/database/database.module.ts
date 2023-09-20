import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { PayanaDbModule } from 'src/payana-db/payana-db.module';

@Module({
  controllers: [DatabaseController],
  providers: [DatabaseService],
  imports: [PayanaDbModule],
})
export class DatabaseModule {}
