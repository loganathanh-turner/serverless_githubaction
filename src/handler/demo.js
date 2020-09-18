'use strict';

exports.handler = async event => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda! version 1.0.4'),
  };
  return response;
};
