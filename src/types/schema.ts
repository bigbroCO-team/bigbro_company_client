import { z } from 'zod';

import { addressSchema } from '@/schemas';

export type addressSchemaType = z.infer<typeof addressSchema>;
