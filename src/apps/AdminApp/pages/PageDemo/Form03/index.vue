<script setup lang="ts">
import TestItem from './components/TestItem.vue';
const {
  schema,
  data,
  getValue,
  bind,
  setState,
  setValue,
  validate,
  getState,
  itemVm,
} = useForm({
  module: 'Test',
});
</script>

<template>
  <v s="w-grow h-grow" w="gap-1">
    <dz-card s="w-grow h-grow" class="card-lg" title="Form">
      <v s="w-grow h-grow" grid>
        <dz-form-item s="w-full h-fit" v-bind="bind('id')('Text')" />
      </v>
    </dz-card>

    <v s="w-grow h-grow" w="gap-1" col>
      <dz-card s="w-grow h-grow" class="card-lg" title="Test">
        <v s="w-grow h-grow" w="gap-1 overflow-auto" col>
          <!-- state -->
          <TestItem title="state">
            <dz-btn
              v-for="item of ['required', 'disabled', 'visible', 'error']"
              :key="item"
              :type="getState('id')?.[item] ? 'primary' : 'outline'"
              :title="`${item}`"
              @click="setState('id')({ [item]: !getState('id')?.[item] })"
            />
          </TestItem>

          <!-- value -->
          <TestItem title="value">
            <dz-btn
              v-for="(item, index) of [
                //
                { value: null, title: 'null' },
                { value: undefined, title: 'undefined' },
                { value: {}, title: '对象' },
                { value: [], title: '数组' },
                { value: true, title: '布尔' },
                { value: false, title: '布尔' },
                { value: 1, title: '数字' },
                { value: '', title: '空值' },
                { value: ' ', title: '空格' },
                { value: '中文', title: '中文' },
              ]"
              :key="index"
              :type="getValue('id') === item.value ? 'primary' : 'outline'"
              :title="item.title"
              @click="setValue('id')(item.value)"
            />
          </TestItem>

          <!-- append -->
          <TestItem title="append">
            <dz-btn
              v-for="(item, index) of [
                //
                { value: null, title: 'null' },
                { value: undefined, title: 'undefined' },
                { value: {}, title: '对象' },
                { value: [], title: '数组' },
                { value: true, title: '布尔' },
                { value: false, title: '布尔' },
                { value: 1, title: '数字' },
                { value: '', title: '空值' },
                { value: ' ', title: '空格' },
                { value: '中文', title: '中文' },
              ]"
              :key="index"
              :title="item.title"
              @click="setValue('id')(`${getValue('id')}${item.value}`)"
            />
          </TestItem>

          <!-- plugin -->
          <!-- prettier-ignore -->
          <TestItem title="plugin">
            <dz-btn 
              v-for="(item, index) of [
                { title: 'focus'   , click: (() => itemVm('id').focus()                   ) },
                { title: 'blur'    , click: (() => itemVm('id').blur()                    ) },
                { title: 'reset'   , click: (() => itemVm('id').reset()                   ) },
                { title: 'clear'   , click: (() => itemVm('id').clear()                   ) },
                { title: 'validate', click: (() => itemVm('id').validate({ error: true }) ) },
                { title: 'validate', click: (() => itemVm('id').validate({ error: false })) },
              ]" 
              :key="index"
              :title="item.title"
              @click="item.click"
            />
          </TestItem>
        </v>
      </dz-card>
    </v>

    <v s="w-grow h-grow" w="gap-1" col>
      <dz-card s="w-grow h-grow" class="card-lg" title="Test">
        <v s="w-grow h-grow" w="gap-1 overflow-auto" col>
          <dz-btn title="value-1" @click="setValue('id')('1')" />
          <dz-btn title="value-[empty]" @click="setValue('id')('')" />
          <dz-btn
            title="append-1"
            @click="setValue('id')(getValue('id') + '1')"
          />
          <dz-btn title="focus" @click="itemVm('id').focus()" />
          <dz-btn title="blur" @click="itemVm('id').blur()" />
        </v>
      </dz-card>
      <dz-card
        s="w-grow h-grow"
        w="overflow-auto"
        class="card-lg"
        :footer="false"
        title="Data"
      >
        <v s="w-grow h-grow" col text="1">
          <pre>{{ data }}</pre>
          <pre>{{ schema }}</pre>
        </v>
      </dz-card>
    </v>
  </v>
</template>
