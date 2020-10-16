import { Todo } from './todo';

export interface TodoRepository {
  find(): Todo[];

  insert(todo: Todo): Promise<string>;

  update(todo: Todo): void;

  delete(id: string): Promise<void>;
}
