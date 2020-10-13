import { APIGatewayProxyHandler } from 'aws-lambda';
import { container } from '../../../inversify.config';
import { Types } from '../../../types';
import {
  InsertTodoCommand,
  InsertTodoCommandPayload,
} from '../../Application/Command/insert-todo-command';

export const handler: APIGatewayProxyHandler = async (_event, _context) => {
  const command = container.get<InsertTodoCommand>(Types.InsertTodoCommand);
  const output = command.execute(
    InsertTodoCommandPayload.fromBody(_event.body),
  );

  return {
    statusCode: 200,
    body: output.id,
  };
};
