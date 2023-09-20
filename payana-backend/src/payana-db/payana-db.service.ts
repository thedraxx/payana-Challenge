import { Injectable } from '@nestjs/common';
import { CreatePayanaDbDto } from './dto/create-payana-db.dto';
import { UpdatePayanaDbDto } from './dto/update-payana-db.dto';
//import { UpdatePayanaDbDto } from './dto/update-payana-db.dto';

@Injectable()
export class PayanaDbService {
  private payanaDb: CreatePayanaDbDto[] = [];

  //! Implement findAll method when you have a database
  private async findOne(id: string) {
    return id;
  }

  async create(createPayanaDbDto: CreatePayanaDbDto[]) {
    this.payanaDb.push(...createPayanaDbDto);
    return {
      message: 'PayanaDb created successfully',
      data: this.payanaDb,
    };
  }

  //! Implement update method
  async update(id: string, updatePayanaDbDto: UpdatePayanaDbDto) {
    if (await this.findOne(id)) {
      const index = this.payanaDb.findIndex((item) => item.id === id);
      this.payanaDb[index] = {
        ...this.payanaDb[index],
        ...updatePayanaDbDto,
      };
      return {
        message: 'PayanaDb updated successfully',
        data: this.payanaDb[index],
      };
    }
  }

  findAll() {
    return {
      message: 'PayanaDb retrieved successfully',
      data: this.payanaDb,
    };
  }

  /*
  remove(id: number) {
    return `This action removes a #${id} payanaDb`;
  }
  
  */
}
