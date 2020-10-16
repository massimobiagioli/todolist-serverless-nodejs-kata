export class InsertTodoCommandPayload {
  constructor(public readonly description: string) {}

  static fromRequest(body: any): InsertTodoCommandPayload {
    const bodyParsed = JSON.parse(body);
    return new InsertTodoCommandPayload(bodyParsed.description);
  }
}

export class InsertTodoCommandOutput {
  constructor(public readonly id: string) {}
}

export interface InsertTodoCommand {
  execute(payload: InsertTodoCommandPayload): Promise<InsertTodoCommandOutput>;
}
