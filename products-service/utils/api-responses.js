const headers = {
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,GET'
}

export const createSuccessfulResponse = (data) => {
    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data)
    };
}

export const createFailedResponse = (error) => {
    return {
        statusCode: error.statusCode,
        headers,
        body: JSON.stringify(data)
    };
}