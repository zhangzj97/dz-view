<script setup lang="ts">
import type { DzViewStateProps } from '@/types/dz-view';
import TestItem from './components/TestItem.vue';
const {
  bind,
  getValue,
  setState,
  setValue,
  validate,
  getState,
  pluginDom,
  store,
} = useForm({});

const test = () => {
  console.table(
    [
      ['und-隐'],
      ['und-显', undefined],
      ['nul-null', null],
      ['fun-f1', () => {}],
      ['fun-f2', () => () => {}],
      ['obj-{}', {}],
      ['obj-{1:1}', { 1: 1 }],
      ['arr-[]', []],
      ['arr-[1]', [1]],
      ['arr-[,1]', [, 1]],
      ['arr-[1,2]', [1, 2]],
      ['arr-[1,2]', [[1, [21, 22, 23], 3], {}]],
      ['boo-T', true],
      ['boo-F', false],
      ['str-空值', ''],
      ['str-空格', ' '],
      ['str-123', '123'],
      ['str-中文', '中文'],
      ['str-T', 'true'],
      ['str-F', 'false'],
      ['num-0', 0],
      ['num-1', 1],
      ['num-1.0', 1.0],
      ['num-0.1', 0.1],
      ['num-1/2', 1 / 2],
      ['num-1/0', 1 / 0],
      ['num-Infinity', Infinity],
      ['num--Infinity', -Infinity],
      ['num-2e10', 2e10],
      ['num-2e102', 2e102],
      ['num-NaN', NaN],
      ['dat-new Date', new Date()],
      ['dat-Date', Date()],
      ['dat-new Date().getTime()', new Date().getTime()],
    ].map(item => {
      const [desc, value] = item;
      return {
        desc,
        value,

        typeof: typeof value,
        String: String(value),
        Number: Number(value),
        Boolean: Boolean(value),
        isArray: Array.isArray(value),
        isNaN: Number.isNaN(value),
        isFinite: Number.isFinite(value),
        isInteger: Number.isInteger(value),
      };
    })
  );
};

test();
</script>

<template>
  <v s="w-grow h-grow" w="gap-1">
    <dz-card s="w-grow h-grow" class="card-lg" title="Form">
      <v s="w-grow h-grow" grid>
        <!-- prettier-ignore -->
        <dz-form-item
          s="w-full h-fit"
          v-bind="
            bind('id')
            ('Text', {},  { onAfterInput: () => console.log('afterInput'), onBeforeInput: () => console.log('beforeInput') })
            ({}, { validator: { rule: [{ pattern: /123/, message: '123' }] } })
          "
        />
        <dz-form-item
          s="w-full h-fit"
          v-bind="bind('age')('Number')({ required: true }, {})"
        />
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
          <TestItem title="value-id">
            <!-- prettier-ignore -->
            <dz-btn
              v-for="(item, index) of [
                { value: null     , title: 'null'      },
                { value: undefined, title: 'undefined' },
                { value: {}       , title: '对象'      },
                { value: []       , title: '数组'      },
                { value: true     , title: '布尔'      },
                { value: false    , title: '布尔'      },
                { value: 1        , title: '数字'      },
                { value: ''       , title: '空值'      },
                { value: ' '      , title: '空格'      },
                { value: '中文'   , title: '中文'      },
              ]"
              :key="index"
              :type="getValue('id') === item.value ? 'primary' : 'outline'"
              :title="item.title"
              @click="setValue('id')(item.value)"
            />
          </TestItem>

          <!-- value -->
          <TestItem title="value-age">
            <!-- prettier-ignore -->
            <dz-btn
              v-for="(item, index) of [
                { value: null     , title: 'null'      },
                { value: undefined, title: 'undefined' },
                { value: {}       , title: '对象'      },
                { value: []       , title: '数组'      },
                { value: true     , title: '布尔'      },
                { value: false    , title: '布尔'      },
                { value: 1        , title: '数字'      },
                { value: 0.6      , title: '0.6'       },
                { value: 1e6      , title: '数字1e6'   },
                { value: NaN      , title: 'NaN'      },
                { value: ''       , title: '空值'      },
                { value: ' '      , title: '空格'      },
                { value: '中文'   , title: '中文'      },
              ]"
              :key="index"
              :type="getValue('age') === item.value ? 'primary' : 'outline'"
              :title="item.title"
              @click="setValue('age')(item.value)"
            />
          </TestItem>

          <!-- append -->
          <TestItem title="append">
            <!-- prettier-ignore -->
            <dz-btn
              v-for="(item, index) of [
                { value: null     , title: 'null'      },
                { value: undefined, title: 'undefined' },
                { value: {}       , title: '对象'      },
                { value: []       , title: '数组'      },
                { value: true     , title: '布尔'      },
                { value: false    , title: '布尔'      },
                { value: 1        , title: '数字'      },
                { value: ''       , title: '空值'      },
                { value: ' '      , title: '空格'      },
                { value: '中文'   , title: '中文'      },
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
                { title: 'focus'   , click: (() => pluginDom('id').focus()                   ) },
                { title: 'blur'    , click: (() => pluginDom('id').blur()                    ) },
                { title: 'reset'   , click: (() => pluginDom('id').reset()                   ) },
                { title: 'clear'   , click: (() => pluginDom('id').clear()                   ) },
                { title: 'validate', click: (() => pluginDom('id').validate({ error: true }) ) },
                { title: 'validate', click: (() => pluginDom('id').validate({ error: false })) },
              ]" 
              :key="index"
              :title="item.title"
              @click="item.click"
            />
          </TestItem>
          <!-- plugin -->
          <!-- prettier-ignore -->
          <TestItem title="plugin">
            <dz-btn 
              v-for="(item, index) of [
                { title: 'focus'   , click: (() => pluginDom('age').focus()                   ) },
                { title: 'blur'    , click: (() => pluginDom('age').blur()                    ) },
                { title: 'reset'   , click: (() => pluginDom('age').reset()                   ) },
                { title: 'clear'   , click: (() => pluginDom('age').clear()                   ) },
                { title: 'validate', click: (() => pluginDom('age').validate({ error: true }) ) },
                { title: 'validate', click: (() => pluginDom('age').validate({ error: false })) },
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
          <pre>{{ store.value }}</pre>
          <pre>{{ store }}</pre>
        </v>
      </dz-card>
    </v>
  </v>
</template>
