'use strict';
import {products} from '../mockData';
import { createFailedResponse, createSuccessfulResponse } from '../utils/api-responses';
import { NotFoundError } from '../utils/errors';

export const handler = async (event) => {
  const productId = event.pathParameters.productId;
  const product = products.find(p => p.id == productId);

  if (!product) {
    return createFailedResponse(new NotFoundError('Product not found'));
  }

  return createSuccessfulResponse(product);
}
