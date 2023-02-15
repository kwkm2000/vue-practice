import { assertIsDefined } from "../../lib/assert";
import uniqid from "uniqid";

export interface Model {
  readonly id: string;
  readonly text: string;
  readonly isDone: boolean;
}

export interface Values {
  readonly text: string;
}

export function factory(todo: Values): Model {
  return {
    id: uniqid(),
    text: todo.text,
    isDone: false,
  };
}

export function isDone(todo: Model): boolean {
  return todo.isDone;
}

export function change(todo: Model, newValues: Values): Model {
  assertIsDefined(newValues.text);

  return {
    ...todo,
    ...newValues,
  };
}

export function toggle(todo: Model): Model {
  return {
    ...todo,
    isDone: !todo.isDone,
  };
}
