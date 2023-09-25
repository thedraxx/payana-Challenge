import { PartialType } from '@nestjs/mapped-types';
import { CreatePayanaDbDto } from './create-payana-db.dto';

export class UpdatePayanaDbDto extends PartialType(CreatePayanaDbDto) {
  valoracion: number;
  texto?: string;
}
