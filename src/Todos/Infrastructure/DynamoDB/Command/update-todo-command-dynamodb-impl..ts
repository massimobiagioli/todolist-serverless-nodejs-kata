import { inject, injectable } from 'inversify';
import { Types } from '../../../../types';
import { TodoRepository } from '../../../Domain/todo-repository';
import { Todo } from '../../../Domain/todo';
import {
  UpdateTodoCommand,
  UpdateTodoCommandPayload,
} from '../../../Application/Command/update-todo-command';

@injectable()
export class UpdateTodoCommandDynamodbImpl implements UpdateTodoCommand {
  @inject(Types.TodoRepository) private todoRepository: TodoRepository;

  async execute(payload: UpdateTodoCommandPayload): Promise<void> {
    const todo: Todo = new Todo(payload.id, payload.description);
    await this.todoRepository.update(todo);
  }
}
