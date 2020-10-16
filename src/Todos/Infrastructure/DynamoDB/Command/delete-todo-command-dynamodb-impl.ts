import { inject, injectable } from 'inversify';
import { Types } from '../../../../types';
import { TodoRepository } from '../../../Domain/todo-repository';
import {
  DeleteTodoCommand,
  DeleteTodoCommandPayload,
} from '../../../Application/Command/delete-todo-command';

@injectable()
export class DeleteTodoCommandDynamodbImpl implements DeleteTodoCommand {
  @inject(Types.TodoRepository) private todoRepository: TodoRepository;

  async execute(payload: DeleteTodoCommandPayload): Promise<void> {
    await this.todoRepository.delete(payload.id);
  }
}
