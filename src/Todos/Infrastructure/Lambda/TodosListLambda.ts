import { APIGatewayProxyHandler } from 'aws-lambda';
import {TodosListQueryDynamoDBImpl} from "../DynamoDB/TodosListQueryDynamoDBImpl";

export const handler: APIGatewayProxyHandler = async (_event, _context) => {
  const query = new TodosListQueryDynamoDBImpl();
  const data = query.execute();

  return {
    statusCode: 200,
    body: JSON.stringify(data,null, 2),
  };
}
