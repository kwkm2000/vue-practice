import { assert } from "../../lib/assert";
import * as Todo from "./todo";

type Model = Todo.Model[];

export function factory(newValues?: Todo.Values[]): Model {
  if (!newValues) {
    return [];
  }

  return newValues.map((value) => Todo.factory(value));
}

export function add(todos: Model, newTodo: Todo.Model): Model {
  return [newTodo, ...todos];
}

export function remove(todos: Model, targetId: string): Model {
  return todos.filter((todo) => todo.id !== targetId);
}

export function update(todos: Model, id: string, values: Todo.Values): Model {
  const targetTodo = todos.find((todo) => todo.id === id);
  assert(!!targetTodo);

  return [...todos, Todo.change(targetTodo, values)];
}

export function toggle(todos: Model, id: string): Model {
  const targetTodo = todos.find((todo) => todo.id === id);
  assert(!!targetTodo);

  return [...todos, Todo.toggle(targetTodo)];
}

// export function findByTitle(todos: Model, title: string): Todo.Model[] {
//   return Object.values(todos).filter((todo) => todo.text === title);
// }
