import {Todo} from "./Todo";

export interface TodoRepository {

    find(): Todo[];

    insert(todo: Todo): string;

}