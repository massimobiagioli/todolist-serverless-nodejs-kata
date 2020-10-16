import { TodoRepository } from '../../../Domain/todo-repository';
import { Todo } from '../../../Domain/todo';
import { injectable } from 'inversify';
import AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { v4 as uuidv4 } from 'uuid';

@injectable()
export class TodoRepositoryDynamodbImpl implements TodoRepository {
  private dynamoClient: DocumentClient = new AWS.DynamoDB.DocumentClient();

  async find(): Promise<Todo[]> {
    const todos: Todo[] = new Array<Todo>();

    const parameters = {
      TableName: 'Todos',
    };

    const data = await this.dynamoClient.scan(parameters).promise();
    data.Items.forEach(item => todos.push(Todo.fromDBItem(item)));
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

  async update(todo: Todo): Promise<void> {
    const parameters = {
      TableName: 'Todos',
      Key: {
        id: todo.id,
      },
      AttributeUpdates: {
        description: {
          Value: todo.description,
        },
      },
    };

    await this.dynamoClient.update(parameters).promise();
  }

  async delete(id: string): Promise<void> {
    const parameters = {
      TableName: 'Todos',
      Key: { id },
    };

    await this.dynamoClient.delete(parameters).promise();
  }
}
