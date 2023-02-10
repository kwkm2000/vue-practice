<template>
  <form @submit="onSubmit">
    <input type="text" @input="onInput" :value="text" />
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits<{
  (event: "addTodo", text: string): void;
}>();
const text = ref("");
const onSubmit = (e: Event) => {
  e.preventDefault();

  if (text.value === "") {
    return;
  }

  emit("addTodo", text.value);
  text.value = "";
};
const onInput = (e: Event) => {
  const newText = (e.target as HTMLInputElement).value;

  text.value = newText;
};
</script>

<style></style>
