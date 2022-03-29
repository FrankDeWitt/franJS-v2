<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    return { t };
  },
});
</script>

<template>
  <hr class="my-6 border-0 border-t border-base-400 dark:border-white" />
  <h4 class="text-base font-medium dark:text-white">
    {{ t('languages') }}
  </h4>
  <div class="mt-6 space-y-4 text-base-700 dark:text-white">
    <ProgressBar :label="t('spanish')" :progress-value="100" />
    <ProgressBar :label="t('english')" :progress-value="75" />
  </div>
  <hr class="my-6 border-0 border-t border-base-400 dark:border-white" />
  <h4 class="text-base font-medium dark:text-white">
    {{ t('skills') }}
  </h4>
  <div class="mt-6 space-y-4 text-base-700 dark:text-white">
    <ProgressBar label="Vue" :progress-value="65" />
    <ProgressBar label="JavaScript" :progress-value="70" />
    <ProgressBar label="CSS" :progress-value="90" />
  </div>
  <hr class="my-6 border-0 border-t border-base-400 dark:border-white" />
  <h4 class="text-base font-medium dark:text-white">
    {{ t('extra_skills') }}
  </h4>
</template>
