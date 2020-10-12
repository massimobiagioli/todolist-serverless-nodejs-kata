import {Todo} from "../../Domain/Todo";

export interface TodosListQuery {
    execute(): Todo[]
}