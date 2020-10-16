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

  async execute(
    payload: InsertTodoCommandPayload,
  ): Promise<InsertTodoCommandOutput> {
    const todo: Todo = new Todo(undefined, payload.description);

    const id: string = await this.todoRepository.insert(todo);

    return new InsertTodoCommandOutput(id);
  }
}
