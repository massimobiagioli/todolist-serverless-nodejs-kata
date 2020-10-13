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

  execute(payload: UpdateTodoCommandPayload): void {
    const todo: Todo = new Todo(payload.id, payload.description);
    this.todoRepository.update(todo);
  }
}
