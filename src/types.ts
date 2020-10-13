const Types = {
    TodoRepository: Symbol.for("TodoRepository"),
    TodosListQuery: Symbol.for("TodosListQuery"),
    InsertTodoCommand: Symbol.for("InsertTodoCommand"),
    UpdateTodoCommand: Symbol.for("UpdateTodoCommand"),
    DeleteTodoCommand: Symbol.for("DeleteTodoCommand")
};

export { Types };