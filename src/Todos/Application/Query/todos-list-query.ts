import { Todo } from '../../Domain/todo';

export interface TodosListQuery {
  execute(): Promise<Todo[]>;
}
