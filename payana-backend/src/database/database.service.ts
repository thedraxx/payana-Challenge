import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  create() {
    return 'This action adds a new database';
  }
}
