'use strict';

exports.handler = async event => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Health check response!'),
  };
  console.log(response);
  return response;
};
