import 'reflect-metadata';
import { Container } from 'inversify';
import { Types } from './types';
import { TodosListQuery } from './Todos/Application/Query/todos-list-query';
import { TodosListQueryDynamodbImpl as TodosListQueryDynamoDatabaseImpl } from './Todos/Infrastructure/DynamoDB/Query/todos-list-query-dynamodb-impl';
import { TodoRepository } from './Todos/Domain/todo-repository';
import { TodoRepositoryDynamodbImpl as TodoRepositoryDynamoDatabaseImpl } from './Todos/Infrastructure/DynamoDB/Repository/todo-repository-dynamodb-impl';
import { InsertTodoCommandDynamodbImpl as InsertTodoCommandDynamoDatabaseImpl } from './Todos/Infrastructure/DynamoDB/Command/insert-todo-command-dynamodb-impl.ts';
import { InsertTodoCommand } from './Todos/Application/Command/insert-todo-command';
import { UpdateTodoCommand } from './Todos/Application/Command/update-todo-command';
import { UpdateTodoCommandDynamodbImpl as UpdateTodoCommandDynamoDatabaseImpl } from './Todos/Infrastructure/DynamoDB/Command/update-todo-command-dynamodb-impl.';
import { DeleteTodoCommand } from './Todos/Application/Command/delete-todo-command';
import { DeleteTodoCommandDynamodbImpl as DeleteTodoCommandDynamoDatabaseImpl } from './Todos/Infrastructure/DynamoDB/Command/delete-todo-command-dynamodb-impl';

const container = new Container();

container
  .bind<TodoRepository>(Types.TodoRepository)
  .to(TodoRepositoryDynamoDatabaseImpl);

container
  .bind<TodosListQuery>(Types.TodosListQuery)
  .to(TodosListQueryDynamoDatabaseImpl);

container
  .bind<InsertTodoCommand>(Types.InsertTodoCommand)
  .to(InsertTodoCommandDynamoDatabaseImpl);
container
  .bind<UpdateTodoCommand>(Types.UpdateTodoCommand)
  .to(UpdateTodoCommandDynamoDatabaseImpl);
container
  .bind<DeleteTodoCommand>(Types.DeleteTodoCommand)
  .to(DeleteTodoCommandDynamoDatabaseImpl);

export { container };
