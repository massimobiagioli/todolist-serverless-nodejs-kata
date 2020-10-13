import { APIGatewayProxyHandler } from 'aws-lambda';
import {container} from "../../../inversify.config";
import {Types} from "../../../types";
import {DeleteTodoCommand, DeleteTodoCommandPayload} from "../../Application/Command/DeleteTodoCommand";

export const handler: APIGatewayProxyHandler = async (_event, _context) => {
  const command = container.get<DeleteTodoCommand>(Types.DeleteTodoCommand);
  command.execute(DeleteTodoCommandPayload.fromBody(_event.pathParameters.id));

  return {
    statusCode: 200,
    body: ''
  };
}
