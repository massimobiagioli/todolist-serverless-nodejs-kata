export class UpdateTodoCommandPayload {
  constructor(
    public readonly id: string,
    public readonly description: string,
  ) {}

  static fromRequest(id: string, body: any): UpdateTodoCommandPayload {
    const bodyParsed = JSON.parse(body);
    return new UpdateTodoCommandPayload(id, bodyParsed.description);
  }
}

export interface UpdateTodoCommand {
  execute(payload: UpdateTodoCommandPayload): Promise<void>;
}
