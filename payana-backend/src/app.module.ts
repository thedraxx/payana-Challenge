import { Module } from '@nestjs/common';
import { PayanaDbModule } from './payana-db/payana-db.module';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PayanaDbModule,
    DatabaseModule,
    MongooseModule.forRoot(process.env.MONGODB),
  ],
})
export class AppModule {}
