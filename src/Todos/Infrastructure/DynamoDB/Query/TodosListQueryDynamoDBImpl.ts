import {TodosListQuery} from "../../../Application/Query/TodosListQuery";
import {Todo} from "../../../Domain/Todo";
import {TodoRepository} from "../../../Domain/TodoRepository";
import {inject, injectable} from "inversify";
import {Types} from "../../../../types";

@injectable()
export class TodosListQueryDynamoDBImpl implements TodosListQuery {

    @inject(Types.TodoRepository) private todoRepository: TodoRepository

    execute(): Todo[] {
        return this.todoRepository.find();
    }

}