import {inject, injectable} from "inversify";
import {Types} from "../../../../types";
import {TodoRepository} from "../../../Domain/TodoRepository";
import {Todo} from "../../../Domain/Todo";
import {UpdateTodoCommand, UpdateTodoCommandPayload} from "../../../Application/Command/UpdateTodoCommand";

@injectable()
export class UpdateTodoCommandDynamoDBImpl implements UpdateTodoCommand {
    @inject(Types.TodoRepository) private todoRepository: TodoRepository

    execute(payload: UpdateTodoCommandPayload): void {
        const todo: Todo = new Todo(payload.id, payload.description);
        this.todoRepository.update(todo);
    }

}