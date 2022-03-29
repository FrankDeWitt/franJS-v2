<script lang="ts">
import { useI18n } from 'vue-i18n';

import { defineComponent } from 'vue';
import { useTheme } from '/@/composables';

export default defineComponent({
  setup() {
    const { t, availableLocales, locale } = useI18n();
    const toggleLocales = () => {
      const locales = availableLocales;
      locale.value =
        locales[(locales.indexOf(locale.value) + 1) % locales.length];
    };
    const { toggleDark } = useTheme();

    return { t, toggleLocales, toggleDark };
  },
});
</script>

<template>
  <div class="fixed top-0 right-0 m-3">
    <ul
      class="flex flex-col justify-center items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
    >
      <li class="cursor-pointer text-2xl sm:text-3xl">
        <a href="#" @click="toggleLocales" class="icons">
          <i class="iconify" :data-icon="'ant-design:translation-outlined'" />
        </a>
      </li>
      <li class="cursor-pointer text-2xl sm:text-3xl">
        <a href="#" @click="toggleDark" class="icons">
          <i class="iconify" :data-icon="'mdi:theme-light-dark'" />
        </a>
      </li>
    </ul>
  </div>
</template>
