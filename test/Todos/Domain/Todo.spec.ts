import {expect, test} from "@jest/globals";
import {Todo} from "../../../src/Todos/Domain/Todo";

test('should create Todo instance', () => {
    const todo = new Todo('123', 'dummy task');

    expect(todo).not.toBeNull();
    expect(todo.id).toBe('123');
    expect(todo.description).toBe('dummy task');
});