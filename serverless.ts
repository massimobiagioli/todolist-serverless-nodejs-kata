import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: {
    name: 'todolist-serverless-nodejs-kata',
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },

  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },

  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack'],

  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    profile: 'flowing_test',
    region: 'eu-central-1',
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb: Query',
          'dynamodb: GetItem',
          'dynamodb: PutItem',
          'dynamodb: UpdateItem',
          'dynamodb: DeleteItem',
        ],
        Resource: 'arn:aws:dynamodb:eu-central-1:755827290206:table/Todos',
      },
    ],
  },

  functions: {
    listTodos: {
      handler: 'src/Todos/Infrastructure/Lambda/todos-list-lambda.handler',
      events: [
        {
          http: {
            method: 'get',
            path: 'api/todos',
          },
        },
      ],
    },

    insertTodo: {
      handler: 'src/Todos/Infrastructure/Lambda/insert-todo-lambda.handler',
      events: [
        {
          http: {
            method: 'post',
            path: 'api/todos',
          },
        },
      ],
    },

    updateTodo: {
      handler: 'src/Todos/Infrastructure/Lambda/update-todo-lambda.handler',
      events: [
        {
          http: {
            method: 'put',
            path: 'api/todos/{id}',
            request: {
              parameters: {
                paths: {
                  id: true,
                },
              },
            },
          },
        },
      ],
    },

    deleteTodo: {
      handler: 'src/Todos/Infrastructure/Lambda/delete-todo-lambda.handler',
      events: [
        {
          http: {
            method: 'delete',
            path: 'api/todos/{id}',
            request: {
              parameters: {
                paths: {
                  id: true,
                },
              },
            },
          },
        },
      ],
    },
  },

  resources: {
    Resources: {
      TodoTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: 'Todos',
          AttributeDefinitions: [
            {
              AttributeName: 'id',
              AttributeType: 'S',
            },
          ],
          KeySchema: [
            {
              AttributeName: 'id',
              KeyType: 'HASH',
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
