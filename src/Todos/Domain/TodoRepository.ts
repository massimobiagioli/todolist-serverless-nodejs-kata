import {Todo} from "./Todo";

export interface TodoRepository {

    find(): Todo[];

}