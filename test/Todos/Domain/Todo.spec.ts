import {expect, test} from "@jest/globals";
import {Todo} from "../../../src/Todos/Domain/Todo";

test('should create Todo instance', () => {
    const todo = new Todo('dummy task');

    expect(todo).not.toBeNull();
    expect(todo.description).toBe('dummy task');
});