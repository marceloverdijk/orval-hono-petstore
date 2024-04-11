import { createFactory } from 'hono/factory';
import { zValidator } from '../petstore.validator';
import { PetCreateContext } from '../petstore.context';
import { petCreateBody, petCreateResponse } from '../petstore.zod';

const factory = createFactory();

export const petCreateHandlers = factory.createHandlers(
  zValidator('json', petCreateBody),
  zValidator('response', petCreateResponse),
  (c: PetCreateContext) => {},
);
