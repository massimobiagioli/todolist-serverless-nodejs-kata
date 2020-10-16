export class DeleteTodoCommandPayload {
  constructor(public readonly id: string) {}

  static fromRequest(id: string): DeleteTodoCommandPayload {
    return new DeleteTodoCommandPayload(id);
  }
}

export interface DeleteTodoCommand {
  execute(payload: DeleteTodoCommandPayload): Promise<void>;
}
