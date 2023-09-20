import { Injectable } from '@nestjs/common';
import { PayanaDbService } from '../payana-db/payana-db.service';
import { BRANDS_SEED } from './data/questions.seed';

@Injectable()
export class DatabaseService {
  constructor(private readonly payanaDbService: PayanaDbService) {}

  create() {
    return this.payanaDbService.create(BRANDS_SEED);
  }
}
