import "reflect-metadata";
import {Container} from "inversify";
import {Types} from "./types";
import {TodosListQuery} from "./Todos/Application/Query/TodosListQuery";
import {TodosListQueryDynamoDBImpl} from "./Todos/Infrastructure/DynamoDB/Query/TodosListQueryDynamoDBImpl";
import {TodoRepository} from "./Todos/Domain/TodoRepository";
import {TodoRepositoryDynamoDBImpl} from "./Todos/Infrastructure/DynamoDB/Repository/TodoRepositoryDynamoDBImpl";

const container = new Container();
container.bind<TodoRepository>(Types.TodoRepository).to(TodoRepositoryDynamoDBImpl);
container.bind<TodosListQuery>(Types.TodosListQuery).to(TodosListQueryDynamoDBImpl);
export { container };