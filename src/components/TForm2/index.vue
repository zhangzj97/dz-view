<script setup lang="ts">
import FormItem from './components/FormItem/index.vue';

const props = defineProps<{
  moduleName: string;
  formState: any;
}>();

const updateValueByCode = (
  { code, beforeUpdate, afterUpdate }: any,
  value: any
) => {
  isDefined(beforeUpdate) && beforeUpdate({}, value);
  emit('setValue', code, value);
  isDefined(afterUpdate) && afterUpdate({}, value);
};

const emit = defineEmits<{
  (e: 'setValue', code: string, value: any): void;
}>();

provide('formState', props.formState);

const schemaDom = reactive({ ...props.formState.schemaData });

const validate = () => {
  Object.entries(props.formState.schemaData).forEach(([key]) => {
    console.log(schemaDom[key].validate());
  });
};

defineExpose({ validate });
</script>

<template>
  <dz-view grid size="h-fit">
    <slot>
      <template
        v-for="([code], index) of Object.entries(formState.schemaData)"
        :key="index"
      >
        <FormItem
          :ref="e => (schemaDom[code] = e)"
          :code="code"
          :component="formState.schemaProps[code].component"
          @updateValue="
            updateValueByCode({ code, ...formState.schemaMethod }, $event)
          "
        />
      </template>
    </slot>
  </dz-view>
</template>
