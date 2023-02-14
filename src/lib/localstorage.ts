import { assertIsDefined } from "./assert";

export function get(key: string) {
  const jsonString = localStorage.getItem(key);
  assertIsDefined(jsonString);
  return jsonString;
}

export function set(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function clear() {
  localStorage.clear();
}
