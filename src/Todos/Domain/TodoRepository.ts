import {Todo} from "./Todo";

export interface TodoRepository {

    find(): Todo[];

    insert(todo: Todo): string;

    update(todo: Todo): void;

    delete(id: string): void;

}