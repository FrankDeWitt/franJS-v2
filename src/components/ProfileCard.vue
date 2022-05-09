<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const show = ref(false);

    setTimeout(() => {
      show.value = true;
    }, 200);

    return {
      t,
      show,
    };
  },
});
</script>

<template>
  <div class="flex flex-col items-center py-4">
    <div class="relative mb-6 w-36 h-36">
      <transition
        enter-active-class="transition duration-1000 ease-out transform"
        enter-from-class="-rotate-180 opacity-0 -translate-x-100"
        enter-to-class="rotate-0 translate-x-0 opacity-100"
        leave-active-class="transition duration-1000 ease-in transform"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <img
          v-if="show"
          alt="Profile image"
          class="inline object-cover w-full h-full mx-auto mb-12 rounded-full w-52 bg-primary-500 dark:bg-complementary-500"
          :src="'avatar.svg'"
        />
      </transition>
      <transition
        enter-active-class="transition duration-1000 ease-out delay-1000 transform"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-1000 ease-in transform"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <span
          v-if="show"
          class="absolute w-4 h-4 border-white rounded-full bottom-1 bg-success-500 right-6"
        />
      </transition>
    </div>
    <div class="sm:hidden text-center">
      <h4 class="mb-2 text-lg font-normal">Fran J Salvador</h4>
      <p class="mb-3 text-sm font-light text-gray-400">
        {{ t('frontend_dev') }}
      </p>
    </div>
    <div class="flex justify-around space-x-4">
      <ul class="flex items-center justify-center space-x-4 sm:space-x-4">
        <li class="flex justify-center w-8 h-8 text-2xl icons-rounded">
          <a href="#" class="flex self-center icons">
            <i class="iconify" :data-icon="'mdi:github'" />
          </a>
        </li>
        <li class="flex justify-center w-8 h-8 text-2xl icons-rounded">
          <a href="#" class="flex self-center icons">
            <i class="iconify" :data-icon="'mdi:twitter'" />
          </a>
        </li>
        <li class="flex justify-center w-8 h-8 text-2xl icons-rounded">
          <a href="#" class="flex self-center icons">
            <i class="iconify" :data-icon="'mdi:instagram'" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
