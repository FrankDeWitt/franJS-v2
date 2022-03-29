<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>

<template>
  <div class="flex flex-col h-screen sm:flex-row">
    <AsideBase />
    <ContentWrapper />
    <AsideTools />
  </div>
</template>
