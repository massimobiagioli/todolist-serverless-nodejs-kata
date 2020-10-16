export class Todo {
  constructor(
    public readonly id: string | null,
    public readonly description: string,
  ) {}

  static fromDBItem(item: any): Todo {
    return new Todo(item.id, item.description);
  }
}
