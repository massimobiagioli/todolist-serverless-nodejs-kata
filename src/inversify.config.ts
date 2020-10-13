import "reflect-metadata";
import {Container} from "inversify";
import {Types} from "./types";
import {TodosListQuery} from "./Todos/Application/Query/TodosListQuery";
import {TodosListQueryDynamoDBImpl} from "./Todos/Infrastructure/DynamoDB/Query/TodosListQueryDynamoDBImpl";
import {TodoRepository} from "./Todos/Domain/TodoRepository";
import {TodoRepositoryDynamoDBImpl} from "./Todos/Infrastructure/DynamoDB/Repository/TodoRepositoryDynamoDBImpl";
import {InsertTodoCommandDynamoDBImpl} from "./Todos/Infrastructure/DynamoDB/Command/InsertTodoCommandDynamoDBImpl";
import {InsertTodoCommand} from "./Todos/Application/Command/InsertTodoCommand";

const container = new Container();

container.bind<TodoRepository>(Types.TodoRepository).to(TodoRepositoryDynamoDBImpl);

container.bind<TodosListQuery>(Types.TodosListQuery).to(TodosListQueryDynamoDBImpl);

container.bind<InsertTodoCommand>(Types.InsertTodoCommand).to(InsertTodoCommandDynamoDBImpl);

export { container };