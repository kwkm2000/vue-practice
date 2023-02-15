<template>
  <NewTaskInput @addTodo="addTodo" />
  <TaskList :tasks="tasks" @deleteTodo="deleteTodo" @changeTodo="changeTodo" />
  <p>done task length {{ doneTasksLength }}</p>
  <p>task length {{ tasks.length }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import NewTaskInput from "./components/NewTaskInput.vue";
import TaskList from "./components/TaskList.vue";
import { Todo, Todos } from "./domain/models";

const items: Todos.Model = [
  { id: "asdf", text: "task1", isDone: false },
  { id: "sjjsjsjs", text: "task2", isDone: true },
];
const tasks = ref(items);
const doneTasksLength = computed(
  () => tasks.value.filter((task) => task.isDone).length
);
const addTodo = (text: string) => {
  const newTask: Todo.Model = Todo.factory({ text: text });
  const todos = Todos.add(tasks.value, newTask);

  tasks.value = todos;
};
const deleteTodo = (id: string) => {
  tasks.value = Todos.remove(tasks.value, id);
};
const changeTodo = (id: string) => {
  tasks.value = Todos.toggle(tasks.value, id);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
</style>
