import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (_event, _context) => {

  return {
    statusCode: 200,
    body: JSON.stringify(_event.body,null, 2)
  };
}
