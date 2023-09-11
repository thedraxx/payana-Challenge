import { Module } from '@nestjs/common';
import { PayanaDbModule } from './payana-db/payana-db.module';

@Module({
  imports: [PayanaDbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
