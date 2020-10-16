import { TodosListQuery } from '../../../Application/Query/todos-list-query';
import { Todo } from '../../../Domain/todo';
import { TodoRepository } from '../../../Domain/todo-repository';
import { inject, injectable } from 'inversify';
import { Types } from '../../../../types';

@injectable()
export class TodosListQueryDynamodbImpl implements TodosListQuery {
  @inject(Types.TodoRepository) private todoRepository: TodoRepository;

  async execute(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }
}
