import {inject, injectable} from "inversify";
import {Types} from "../../../../types";
import {TodoRepository} from "../../../Domain/TodoRepository";
import {DeleteTodoCommand, DeleteTodoCommandPayload} from "../../../Application/Command/DeleteTodoCommand";

@injectable()
export class DeleteTodoCommandDynamoDBImpl implements DeleteTodoCommand {
    @inject(Types.TodoRepository) private todoRepository: TodoRepository

    execute(payload: DeleteTodoCommandPayload): void {
        this.todoRepository.delete(payload.id);
    }

}