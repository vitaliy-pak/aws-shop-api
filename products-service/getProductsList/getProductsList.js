'use strict';
import { products } from '../mockData';
import { createSuccessfulResponse } from '../utils/api-responses';

export const handler = async (event) => {
  return createSuccessfulResponse(products);
}
