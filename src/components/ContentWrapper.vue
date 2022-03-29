<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const asideSize = ref(null);
    return {
      t,
      asideSize,
    };
  },
});
</script>

<template>
  <div class="bg-gray-200 wrapper dark:bg-gray-800">
    <h2
      class="pt-12 pb-6 text-3xl font-bold text-center text-black dark:text-white"
    >
      {{ t('education') }}
    </h2>
  </div>
</template>

<style lang="postcss">
.wrapper {
  @media (min-width: 640px) {
    margin-left: var(--aside-width);
  }
}
</style>
