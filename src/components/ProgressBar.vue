<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'FjProgressBar',
  props: {
    label: {
      type: String,
      default: '',
    },
    progressValue: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
});
</script>

<template>
  <div>
    <div class="flex justify-between">
      <p>{{ $props.label }}</p>
      <p>{{ $props.progressValue }}%</p>
    </div>
    <div class="relative h-2 mt-2">
      <transition name="bars" appear>
        <div
          class="border rounded-full border-primary-500 dark:border-complementary-500"
          :style="`transition: bar 2s`"
        >
          <div
            class="h-2 rounded-full bg-primary-500 dark:bg-complementary-500 bar"
            :style="`--width: ${progressValue}%;`"
          ></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bar {
  width: var(--width);
}
.bars-enter-from .bar {
  width: 0;
}
.bars-enter-active .bar {
  transition: all 2s;
}
</style>
