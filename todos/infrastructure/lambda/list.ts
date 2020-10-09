import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (_event, _context) => {
  let data: any[] = [
      { nome: "task1" },
      { nome: "task2" },
      { nome: "task3" }
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(data,null, 2),
  };
}
