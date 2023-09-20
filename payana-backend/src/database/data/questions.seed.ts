import { PayanaDb } from 'src/payana-db/entities/payana-db.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: PayanaDb[] = [
  {
    id: uuid(),
    texto: '¿Qué tan satisfecho estás con el producto?',
    valoracion: 5,
  },
  {
    id: uuid(),
    texto: '¿Cuál es tu opinión sobre el servicio al cliente?',
    valoracion: 5,
  },
  {
    id: uuid(),
    texto: '¿Cómo calificarías la usabilidad del sitio web?',
    valoracion: 5,
  },
  {
    id: uuid(),
    texto: '¿Recomendarías nuestro producto a otros?',
    valoracion: 5,
  },
  {
    id: uuid(),
    texto: '¿Cómo evaluarías la calidad del producto?',
    valoracion: 5,
  },
];
