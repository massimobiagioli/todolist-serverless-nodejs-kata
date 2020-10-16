import { Todo } from './todo';

export interface TodoRepository {
  find(): Promise<Todo[]>;

  insert(todo: Todo): Promise<string>;

  update(todo: Todo): void;

  delete(id: string): Promise<void>;
}
