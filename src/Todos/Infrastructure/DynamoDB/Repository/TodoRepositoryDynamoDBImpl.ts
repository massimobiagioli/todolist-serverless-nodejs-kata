import {TodoRepository} from "../../../Domain/TodoRepository";
import {Todo} from "../../../Domain/Todo";
import {injectable} from "inversify";

@injectable()
export class TodoRepositoryDynamoDBImpl implements TodoRepository {

    find(): Todo[] {
        let todos: Todo[] = new Array<Todo>();

        todos.push(new Todo("prova 1"));
        todos.push(new Todo("prova 2"));
        todos.push(new Todo("prova 3"));

        return todos;
    }

}