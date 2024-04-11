import { createFactory } from 'hono/factory';
import { zValidator } from '../petstore.validator';
import { PetListContext } from '../petstore.context';
import { petListQueryParams, petListResponse } from '../petstore.zod';

const factory = createFactory();

export const petListHandlers = factory.createHandlers(
  zValidator('query', petListQueryParams),
  zValidator('response', petListResponse),
  (c: PetListContext) => {},
);
