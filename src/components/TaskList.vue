<template>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.text }}
      <input
        type="checkbox"
        :checked="task.isDone"
        @change="onChange(task.id)"
      />
      <button @click="onClick(task.id)">✗</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

interface Task {
  id: string;
  text: string;
  isDone: boolean;
}
interface Props {
  tasks: Task[];
}
defineProps<Props>();
const emit = defineEmits<{
  (event: "deleteTodo", id: string): void;
  (event: "changeTodo", id: string): void;
}>();
const onClick = (id: string) => {
  emit("deleteTodo", id);
};
const onChange = (id: string) => {
  emit("changeTodo", id);
};
</script>

<style></style>
