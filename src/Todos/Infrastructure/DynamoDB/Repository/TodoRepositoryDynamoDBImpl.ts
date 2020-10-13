import {TodoRepository} from "../../../Domain/TodoRepository";
import {Todo} from "../../../Domain/Todo";
import {injectable} from "inversify";

@injectable()
export class TodoRepositoryDynamoDBImpl implements TodoRepository {

    find(): Todo[] {
        const todos: Todo[] = new Array<Todo>();

        todos.push(new Todo('1', 'prova 1'));
        todos.push(new Todo('2', 'prova 2'));
        todos.push(new Todo('3', 'prova 3'));

        return todos;
    }

    insert(todo: Todo): string {
        console.log(todo);
        const id = '12345';
        return id;
    }

    update(todo: Todo): void {
        console.log(todo);
    }

    delete(id: string): void {
        console.log(id);
    }

}