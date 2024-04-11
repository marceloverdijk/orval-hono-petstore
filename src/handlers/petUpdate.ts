import { createFactory } from 'hono/factory';
import { zValidator } from '../petstore.validator';
import { PetUpdateContext } from '../petstore.context';
import { petUpdateParams, petUpdateBody, petUpdateResponse } from '../petstore.zod';

const factory = createFactory();

export const petUpdateHandlers = factory.createHandlers(
  zValidator('param', petUpdateParams),
  zValidator('json', petUpdateBody),
  zValidator('response', petUpdateResponse),
  (c: PetUpdateContext) => {},
);
