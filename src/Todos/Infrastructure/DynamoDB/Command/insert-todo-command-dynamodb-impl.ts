import {
  InsertTodoCommand,
  InsertTodoCommandOutput,
  InsertTodoCommandPayload,
} from '../../../Application/Command/insert-todo-command';
import { inject, injectable } from 'inversify';
import { Types } from '../../../../types';
import { TodoRepository } from '../../../Domain/todo-repository';
import { Todo } from '../../../Domain/todo';

@injectable()
export class InsertTodoCommandDynamodbImpl implements InsertTodoCommand {
  @inject(Types.TodoRepository) private todoRepository: TodoRepository;

  execute(payload: InsertTodoCommandPayload): InsertTodoCommandOutput {
    const todo: Todo = new Todo(undefined, payload.description);
    const id: string = this.todoRepository.insert(todo);
    return new InsertTodoCommandOutput(id);
  }
}
