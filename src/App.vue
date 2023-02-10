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
import uniqid from "uniqid";

const items = [
  { id: "asdf", text: "task1", isDone: false },
  { id: "sjjsjsjs", text: "task2", isDone: true },
];
const tasks = ref(items);
const doneTasksLength = computed(
  () => tasks.value.filter((task) => task.isDone).length
);
const addTodo = (text: string) => {
  const newTask = {
    id: uniqid(),
    text: text,
    isDone: false,
  };

  tasks.value.unshift(newTask);
};
const deleteTodo = (id: string) => {
  const filteredTasks = tasks.value.filter((task) => task.id !== id);
  tasks.value = filteredTasks;
};
const changeTodo = (id: string) => {
  const targetTask = tasks.value.find((task) => task.id === id);

  if (!targetTask) {
    return;
  }

  targetTask.isDone = !targetTask.isDone;
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
