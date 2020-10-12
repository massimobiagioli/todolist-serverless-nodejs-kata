import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (_event, _context) => {

  return {
    statusCode: 200,
    body: JSON.stringify({
      "id": _event.pathParameters.id,
      "body": _event.body
    })
  };
}
