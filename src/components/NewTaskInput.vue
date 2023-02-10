<template>
  <form @submit="onSubmit">
    <input type="text" @input="onInput" :value="text" />
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const text = ref("");

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
</script>

<style></style>
