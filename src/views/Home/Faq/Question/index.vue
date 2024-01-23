<template>
  <li
    :class="`flex items-start justify-between gap-4 p-5 border-b border-[#EAECF0] mb-1 ${
      expandedId === id ? 'bg-[#F9FAFB] rounded-md border' : ''
    }`"
  >
    <div>
      <h3 class="text-xl text-clear-link-darket-text font-semibold">
        {{ title }}
      </h3>
      <p
        class="text-[16px] text-clear-link-gray-text mt-1"
        v-if="expandedId === id"
      >
        {{ answer }}
      </p>
    </div>
    <div
      class="opacity-80 cursor-pointer hover:opacity-100"
      @click="toggleExpand"
    >
      <v-icon
        :icon="`${
          expandedId === id
            ? 'mdi-minus-circle-outline'
            : 'mdi-plus-circle-outline'
        }`"
        size="30"
        class="text-clear-link-gray-text"
      />
    </div>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

const emit = defineEmits(["updateExpandedIndex"]);

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
  expandedId: {
    type: Number,
    required: true,
  },
});

const toggleExpand = () => {
  const index = props.expandedId === props.id ? 0 : props.id;
  emit("updateExpandedIndex", index);
};
</script>
