import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class PayanaDb extends Document {
  @Prop({
    index: true,
    unique: true,
  })
  texto: string;

  @Prop({
    index: false, // Cambiar a false para permitir valores duplicados
    unique: false,
  })
  valoracion: number;
}

export const PayanaDbSchema = SchemaFactory.createForClass(PayanaDb);
