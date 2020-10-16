import { APIGatewayProxyHandler } from 'aws-lambda';
import { container } from '../../../inversify.config';
import { Types } from '../../../types';
import {
  UpdateTodoCommand,
  UpdateTodoCommandPayload,
} from '../../Application/Command/update-todo-command';

export const handler: APIGatewayProxyHandler = async (_event, _context) => {
  const command = container.get<UpdateTodoCommand>(Types.UpdateTodoCommand);
  await command.execute(
    UpdateTodoCommandPayload.fromRequest(_event.pathParameters.id, _event.body),
  );

  return {
    statusCode: 200,
    body: '',
  };
};
