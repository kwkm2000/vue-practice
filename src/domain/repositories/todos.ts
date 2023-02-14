import { Todo, Todos } from "../models";
import { get, set } from "../../lib/localstorage";

const KEY = "todos";

export function getAll() {
  try {
    return get(KEY);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export function add(newTodo: Todo.Model) {
  // const todos =
}

export function remove(id: string) {}

export function toggle(id: string, newValue: string | null) {}

export function change(id: string, newValue: object) {}
