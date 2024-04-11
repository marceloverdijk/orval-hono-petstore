import { createFactory } from 'hono/factory';
import { zValidator } from '../petstore.validator';
import { PetRetrieveContext } from '../petstore.context';
import { petRetrieveParams, petRetrieveResponse } from '../petstore.zod';

const factory = createFactory();

export const petRetrieveHandlers = factory.createHandlers(
  zValidator('param', petRetrieveParams),
  zValidator('response', petRetrieveResponse),
  (c: PetRetrieveContext) => {},
);
