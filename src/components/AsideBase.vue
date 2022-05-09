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
  <div
    class="max-w-full p-3 bg-white shadow sm:overflow-y-scroll xl:p-10 dark:bg-gray-600 aside"
  >
    <ProfileCard />
    <hr class="my-6 border-0 border-t border-base-400" />
    <ProfileData />
    <hr class="my-6 border-0 border-t border-base-400" />
    <ProfileSkills />
  </div>
</template>

<style lang="postcss">
.aside {
  @media (min-width: 640px) {
    width: var(--aside-width);
  }
  @media (min-width: 1280px) {
  }
}
</style>
