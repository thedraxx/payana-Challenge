import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PayanaDb } from 'src/payana-db/entities/payana-db.entity';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(PayanaDb.name)
    private readonly payanaDbnModel: Model<PayanaDb>,
  ) {}

  async create() {
    try {
      await this.payanaDbnModel.deleteMany({});

      const payanaDbToInsert: { texto: string; valoracion: number }[] = [
        {
          texto: '¿Qué tan satisfecho estás con el producto?',
          valoracion: 5,
        },
        {
          texto: '¿Cuál es tu opinión sobre el servicio al cliente?',
          valoracion: 4,
        },
        {
          texto: '¿Cómo calificarías la usabilidad del sitio web?',
          valoracion: 2,
        },
        {
          texto: '¿Recomendarías nuestro producto a otros?',
          valoracion: 21,
        },
        {
          texto: '¿Cómo evaluarías la calidad del producto?',
          valoracion: 1,
        },
      ];

      await this.payanaDbnModel.insertMany(payanaDbToInsert);

      console.log('Documentos insertados con éxito.');
      return 'Documentos insertados con éxito.';
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('Ya existen documentos en la base de datos.');
      }
      console.error('Error al insertar documentos:', error);
      throw error;
    }
  }
}
