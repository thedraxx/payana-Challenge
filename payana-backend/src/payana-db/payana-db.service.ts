import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdatePayanaDbDto } from './dto/update-payana-db.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PayanaDb } from './entities/payana-db.entity';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class PayanaDbService {
  private defaultLimit: number;

  constructor(
    @InjectModel(PayanaDb.name)
    private readonly payanaDbModel: Model<PayanaDb>,
    private readonly configService: ConfigService,
  ) {
    this.defaultLimit = this.configService.get<number>('default_limit');
  }

  private async isExistPayanaDb(id: string) {
    try {
      const payanaDb = await this.payanaDbModel.findById(id);

      if (!payanaDb || payanaDb === null) {
        throw new BadRequestException('No se encontro el registro');
      }
      return payanaDb;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('A ocurrido un error');
    }
  }

  async getAll() {
    try {
      return this.payanaDbModel
        .find()
        .find()
        .sort({
          no: 1,
        })
        .select('-__v');
    } catch (error) {
      console.log(error);
      throw new ExceptionsHandler(error);
    }
  }

  async findOne(id: string) {
    try {
      const getDataPayanaDB = await this.isExistPayanaDb(id);
      return getDataPayanaDB;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('A ocurrido un error, mirar consola');
    }
  }

  async update(id: string, updatePayanaDbDto: UpdatePayanaDbDto) {
    try {
      const payanaDb = await this.isExistPayanaDb(id);
      payanaDb.set({
        ...updatePayanaDbDto,
        valoracion: updatePayanaDbDto.valoracion,
      });
      return payanaDb.save();
    } catch (error) {
      console.log(error);
      throw new ExceptionsHandler(error);
    }
  }
}
