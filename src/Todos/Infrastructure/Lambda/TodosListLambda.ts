import { APIGatewayProxyHandler } from 'aws-lambda';
import {TodosListQuery} from "../../Application/Query/TodosListQuery";
import {Types} from "../../../types";
import {container} from "../../../inversify.config";

export const handler: APIGatewayProxyHandler = async (_event, _context) => {
  const query = container.get<TodosListQuery>(Types.TodosListQuery);
  const data = query.execute();

  return {
    statusCode: 200,
    body: JSON.stringify(data,null, 2),
  };
}
