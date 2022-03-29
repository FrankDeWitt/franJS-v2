<script lang="ts">
import { defineComponent, inject, computed } from 'vue';
import type { ComputedRef } from 'vue';

import { useI18n } from 'vue-i18n';
import { differenceInYears, parse } from 'date-fns';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const birthdate: string | undefined = inject('birthdate');
    const age: ComputedRef<number> = computed(() => {
      const date: Date = parse(birthdate!, 'dd/MM/yyyy', new Date());
      const age: number = differenceInYears(new Date(), date);
      return age;
    });

    return { t, age };
  },
});
</script>

<template>
  <div class="space-y-2">
    <ProfileDataElement>
      <template #title>
        <div class="px-2 py-1 bg-primary-500 dark:bg-complementary-500">
          {{ t('age') }}:
        </div>
      </template>
      <template #content>
        <div class="dark:text-white">{{ age }}</div>
      </template>
    </ProfileDataElement>
    <ProfileDataElement>
      <template #title>
        <div class="p-2 bg-primary-500 dark:bg-complementary-500">
          {{ t('residence') }}:
        </div>
      </template>
      <template #content>
        <div class="dark:text-white">
          {{ t('spanish_abbreviation') }}
        </div>
      </template>
    </ProfileDataElement>
    <ProfileDataElement>
      <template #title>
        <div class="p-2 bg-primary-500 dark:bg-complementary-500">
          {{ t('freelance') }}:
        </div>
      </template>
      <template #content>
        <div class="text-success-500">
          {{ t('available') }}
        </div>
      </template>
    </ProfileDataElement>
    <ProfileDataElement>
      <template #title>
        <div class="p-2 bg-primary-500 dark:bg-complementary-500">
          {{ t('city') }}:
        </div>
      </template>
      <template #content>
        <div class="dark:text-white">
          {{ t('barcelona') }}
        </div>
      </template>
    </ProfileDataElement>
  </div>
</template>
