<template>
  <form @submit="onSubmit">
    <input type="text" @input="onInput" :value="text" />
  </form>

  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.text }}
      <input
        type="checkbox"
        :checked="task.isDone"
        @change="onChange($event, task.id)"
      />
      <button @click="onClick($event, task.id)">✗</button>
    </li>
  </ul>
  <p>done task length {{ doneTasksLength }}</p>
  <p>task length {{ tasks.length }}</p>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const items = [
  { id: 1, text: "task1", isDone: false },
  { id: 2, text: "task2", isDone: true },
];
const tasks = ref(items);
const doneTasksLength = computed(
  () => tasks.value.filter((task) => task.isDone).length
);
const text = ref("");
const onChange = (e: Event, taskId: number) => {
  const targetTask = tasks.value.find((task) => task.id === taskId);

  if (!targetTask) {
    return;
  }

  targetTask.isDone = !targetTask.isDone;
};
const onSubmit = (e: Event) => {
  e.preventDefault();

  const newTask = {
    id: tasks.value.length + 1,
    text: text.value,
    isDone: false,
  };

  tasks.value.unshift(newTask);
  console.log("clear");
  text.value = "";
};
const onInput = (e: Event) => {
  const newText = (e.target as HTMLInputElement).value;

  text.value = newText;
};
const onClick = (e: Event, taskId: number) => {
  e.preventDefault();
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
li {
  list-style: none;
}
</style>
