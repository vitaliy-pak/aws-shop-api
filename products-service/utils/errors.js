const errorTypes = {
    badRequestError: {statusText: 'Bad Request Error', statusCode: 400},
    notFoundError: {statusText: 'Not Found Error', statusCode: 404},
    internalServerError: { statusText: 'Internal Server Error', statusCode: 500},
}

export class RequestError extends Error {
    constructor(statusCode = errorTypes.internalServerError.statusCode, statusText = errorTypes.internalServerError.statusText, message = 'Unknown error has occured') {
      super();

      this.statusCode = statusCode;
      this.statusText = statusText;
      this.message = message;
    }
  }
  
  export class BadRequestError extends RequestError {
    constructor(message) {
      super(errorTypes.badRequestError.statusCode, errorTypes.badRequestError.statusText, message);
    }
  }

  export class NotFoundError extends RequestError {
    constructor(message) {
      super(errorTypes.notFoundError.statusCode, errorTypes.notFoundError.statusText, message);
    }
  }
  
  export class InternalServerError extends RequestError {
    constructor(message) {
      super(errorTypes.internalServerError.statusCode, errorTypes.internalServerError.statusText, message);
    }
  }
