<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import avatar from '/@/assets/avatar.svg';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const asideSize = ref(null);
    return {
      t,
      asideSize,
      avatar,
    };
  },
});
</script>

<template>
  {{ isDark }}
  <div class="bg-gray-200 dark:bg-gray-800">
    <div class="flex flex-col px-6 pb-6">
      <div class="py-16 bg-white dark:bg-gray-600">
        <div class="container px-4 mx-auto sm:px-8 lg:px-16 xl:px-20">
          <div
            class="grid items-center grid-cols-1 gap-8 hero-wrapper md:grid-cols-12"
          >
            <div class="col-span-6 hero-text">
              <h1
                class="max-w-xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl primary-em"
                v-html="t('my_name')"
              />
              <p class="mt-4 text-base font-normal leading-6 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                volutpat feugiat placerat lobortis. Natoque rutrum semper sed
                suspendisse nunc lectus.
              </p>
            </div>
            <div class="col-span-6 hero-image">
              <img class="block dark:hidden" :src="'hero_light.svg'" alt="" />
              <img class="hidden dark:block" :src="'hero_dark.svg'" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
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
