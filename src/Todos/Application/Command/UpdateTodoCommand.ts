export class UpdateTodoCommandPayload {
    constructor(
        public readonly id: string,
        public readonly description: string
    ) {
    }

    static fromBody(id: string, body: any): UpdateTodoCommandPayload {
        return new UpdateTodoCommandPayload(id, body.description);
    }
}

export interface UpdateTodoCommand {
    execute(payload: UpdateTodoCommandPayload): void;
}
