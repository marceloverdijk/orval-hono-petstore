import { createFactory } from 'hono/factory';
import { zValidator } from '../petstore.validator';
import { PetDeleteContext } from '../petstore.context';
import { petDeleteParams, petDeleteResponse } from '../petstore.zod';

const factory = createFactory();

export const petDeleteHandlers = factory.createHandlers(
  zValidator('param', petDeleteParams),
  zValidator('response', petDeleteResponse),
  (c: PetDeleteContext) => {},
);
