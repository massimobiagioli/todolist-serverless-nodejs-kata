import { TodoRepository } from '../../../Domain/todo-repository';
import { Todo } from '../../../Domain/todo';
import { injectable } from 'inversify';
import AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { v4 as uuidv4 } from 'uuid';

@injectable()
export class TodoRepositoryDynamodbImpl implements TodoRepository {
  private dynamoClient: DocumentClient = new AWS.DynamoDB.DocumentClient();

  find(): Todo[] {
    const todos: Todo[] = new Array<Todo>();

    todos.push(new Todo('1', 'prova 1'));
    todos.push(new Todo('2', 'prova 2'));
    todos.push(new Todo('3', 'prova 3'));

    return todos;
  }

  async insert(todo: Todo): Promise<string> {
    const id = uuidv4();
    const parameters = {
      TableName: 'Todos',
      Item: {
        id,
        description: todo.description,
      },
    };

    try {
      await this.dynamoClient.put(parameters).promise();
      return id;
    } catch (error) {
      return error.message;
    }
  }

  update(todo: Todo): void {
    console.log(todo);
  }

  async delete(id: string): Promise<void> {
    const parameters = {
      TableName: 'Todos',
      Key: { id }
    };

    await this.dynamoClient.delete(parameters).promise();
  }
}
