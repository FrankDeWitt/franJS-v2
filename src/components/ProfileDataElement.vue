<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="flex items-center justify-between text-lg font-light">
    <slot name="title" />
    <slot name="content" />
  </div>
</template>
