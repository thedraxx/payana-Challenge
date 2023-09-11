import { Injectable } from '@nestjs/common';
import { CreatePayanaDbDto } from './dto/create-payana-db.dto';
import { UpdatePayanaDbDto } from './dto/update-payana-db.dto';

@Injectable()
export class PayanaDbService {
  create(createPayanaDbDto: CreatePayanaDbDto) {
    return 'This action adds a new payanaDb';
  }

  findAll() {
    return `This action returns all payanaDb`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payanaDb`;
  }

  update(id: number, updatePayanaDbDto: UpdatePayanaDbDto) {
    return `This action updates a #${id} payanaDb`;
  }

  remove(id: number) {
    return `This action removes a #${id} payanaDb`;
  }
}
