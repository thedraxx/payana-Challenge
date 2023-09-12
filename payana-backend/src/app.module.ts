import { Module } from '@nestjs/common';
import { PayanaDbModule } from './payana-db/payana-db.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PayanaDbModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
