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
      includeModules: true
    }
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
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1'
    },
    profile: 'flowing_test',
    region: 'eu-central-1'
  },
  functions: {
    listTodos: {
      handler: 'src/Todos/Infrastructure/Lambda/TodosListLambda.handler',
      events: [
        {
          http: {
            method: 'get',
            path: 'api/todos',
          }
        }
      ]
    },
    insertTodo: {
      handler: 'src/Todos/Infrastructure/Lambda/InsertTodoLambda.handler',
      events: [
        {
          http: {
            method: 'post',
            path: 'api/todos',
          }
        }
      ]
    },
    updateTodo: {
      handler: 'src/Todos/Infrastructure/Lambda/UpdateTodoLambda.handler',
      events: [
        {
          http: {
            method: 'put',
            path: 'api/todos/{id}',
            request: {
              parameters: {
                paths: {
                  id: true
                }
              }
            }
          }
        }
      ]
    },
    deleteTodo: {
      handler: 'src/Todos/Infrastructure/Lambda/DeleteTodoLambda.handler',
      events: [
        {
          http: {
            method: 'delete',
            path: 'api/todos/{id}',
            request: {
              parameters: {
                paths: {
                  id: true
                }
              }
            }
          }
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration;