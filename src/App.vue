<template>
  <form @submit="onSubmit">
    <input type="text" @input="onInput" />
  </form>

  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.text }} <input type="checkbox" :checked="task.isDone" />
      <button @click="onClick($event, task.id)">✗</button>
    </li>
  </ul>
  <p>task length {{ tasks.length }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = [
  { id: 1, text: "task1", isDone: false },
  { id: 2, text: "task2", isDone: true },
];
const tasks = ref(items);
const text = ref("");
const onSubmit = (e) => {
  e.preventDefault();

  const newTask = {
    id: tasks.value.length + 1,
    text,
    isDone: false,
  };

  tasks.value.unshift(newTask);
};
const onInput = (e) => {
  const newText = e.target.value;

  text.value = newText;
};
const onClick = (e, taskId) => {
  e.preventDefault();
  console.log(taskId);
  const filteredTasks = tasks.value.filter((task) => task.id !== taskId);
  tasks.value = filteredTasks;
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
</style>
