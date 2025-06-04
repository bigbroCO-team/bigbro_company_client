import { z } from 'zod';

export const addressSchema = z.object({
  tag: z.string(),
  name: z.string(),
  zipcode: z.string(),
  phone: z.string().regex(/^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/),
  address: z.string(),
  detail: z.string(),
  request: z.string().optional(),
  default: z.boolean(),
});
