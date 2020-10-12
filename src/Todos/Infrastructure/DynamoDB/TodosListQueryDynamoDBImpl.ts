import {TodosListQuery} from "../../Application/Query/TodosListQuery";
import {Todo} from "../../Domain/Todo";
import {TodoRepository} from "../../Domain/TodoRepository";

export class TodosListQueryDynamoDBImpl implements TodosListQuery {

    private todoRepository: TodoRepository;

    constructor() {
        this.todoRepository = new TodoRepository();
    }

    execute(): Todo[] {
        return this.todoRepository.find();
    }

}