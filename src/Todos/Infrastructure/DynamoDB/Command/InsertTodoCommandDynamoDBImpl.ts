import {
    InsertTodoCommand,
    InsertTodoCommandOutput,
    InsertTodoCommandPayload
} from "../../../Application/Command/InsertTodoCommand";
import {inject, injectable} from "inversify";
import {Types} from "../../../../types";
import {TodoRepository} from "../../../Domain/TodoRepository";
import {Todo} from "../../../Domain/Todo";

@injectable()
export class InsertTodoCommandDynamoDBImpl implements InsertTodoCommand {
    @inject(Types.TodoRepository) private todoRepository: TodoRepository

    execute(payload: InsertTodoCommandPayload): InsertTodoCommandOutput {
        const todo: Todo = new Todo(null, payload.description);
        const id: string = this.todoRepository.insert(todo);
        return new InsertTodoCommandOutput(id);
    }

}