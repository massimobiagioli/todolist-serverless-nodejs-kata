export class InsertTodoCommandPayload {
  constructor(public readonly description: string) {}

  static fromBody(body: any): InsertTodoCommandPayload {
    return new InsertTodoCommandPayload(body.description);
  }
}

export class InsertTodoCommandOutput {
  constructor(public readonly id: string) {}
}

export interface InsertTodoCommand {
  execute(payload: InsertTodoCommandPayload): InsertTodoCommandOutput;
}
