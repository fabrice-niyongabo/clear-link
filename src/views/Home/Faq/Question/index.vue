<template>
  <li></li>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});
</script>
