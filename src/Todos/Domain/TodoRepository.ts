import {Todo} from "./Todo";

export class TodoRepository {

    find(): Todo[] {
        let todos: Todo[] = new Array<Todo>();

        todos.push(new Todo("prova 1"));
        todos.push(new Todo("prova 2"));
        todos.push(new Todo("prova 3"));

        return todos;
    }

}