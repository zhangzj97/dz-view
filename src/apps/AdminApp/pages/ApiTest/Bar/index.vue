<script setup lang="ts">
const { bind, getValue, setState, setValue, validate, getState, pluginDom } = useForm({}, { pluginSet: 'PluginRaw', state: { test: false, required: false } }); // prettier-ignore

const { Assert } = useTest();

import api from './swagger.json';
import { computed, reactive } from 'vue';

import { test } from './test';

const apiState = reactive<any>({
  testMode: 'api', // api | test

  pathList: [],
  pathMap: {},
  pathCode: null,

  definitionList: [],

  definitions: api.definitions,
  paths: api.paths,

  testList: [
    //
    test,
  ],

  testMap: {
    测试一号: test,
  },

  testStageStepMap: {},

  testCode: null,
});

onMounted(async () => {
  apiState.pathList = Object.entries(api.paths).map(([k, v]) => {
    const requestIndex = v.post?.parameters?.[0]?.schema.$ref.replace(
      /#\/definitions\//,
      ''
    );
    const responseIndex = v.post?.responses[200].schema.$ref.replace(
      /#\/definitions\//,
      ''
    );
    return {
      code: k,
      summary: v.post?.summary,
      requestIndex,
      responseIndex,
      request: api.definitions[requestIndex],
      response: api.definitions[responseIndex],
      cqrs: requestIndex?.match(/^Query/) ? 'query' : 'cmd',
      ...v,
    };
  });

  apiState.pathMap = Object.fromEntries(
    apiState.pathList.map(i => [i.code, i])
  );

  apiState.definitionList = Object.entries(api.definitions).map(([k, v]) => {
    return { code: k, ...v };
  });

  // TODO bug 第一次无效
  await setValue('description')(api.info.description);
  await setValue('description')(api.info.description);
  await setValue('version')(api.info.version);
  await setValue('title')(api.info.title);
});

const chooseApiPath = async item => {
  const { code } = item;
  apiState.pathCode = code;
  await setValue('apiPath')(code);

  const request = apiState.pathMap[code].request;

  /// parseRequest
  const requestDemo = {};
  const typeMap = {
    object: {},
    string: 'string',
    integer: 10,
    boolean: true,
    array: [],
  };
  const loop = (object, address) => {
    Object.entries(object).forEach(([k, v]) => {
      if (v?.type === 'array' && !v?.items.$ref) {
        address[k] = [typeMap[v?.items.type]];
      } else if (v?.type === 'array' && v?.items.$ref) {
        address[k] = [];
        address[k].push({});
        loop(
          apiState.definitions[v?.items.$ref.replace(/#\/definitions\//, '')]
            .properties,
          address[k][0]
        );
      } else if (v?.$ref) {
        address[k] = {};
        loop(
          apiState.definitions[v?.$ref.replace(/#\/definitions\//, '')]
            .properties,
          address[k]
        );
      } else if (v?.type == 'object' && v?.properties && !v?.$ref) {
        address[k] = {};
        loop(v?.properties, address[k]);
      } else {
        address[k] = typeMap[v?.type];
      }
    });
  };
  loop(request.properties, requestDemo);
  ///

  await setValue('request')(requestDemo);
};

const getTypeAmongWarpper = computed(() => (text: string) => {
  return text
    .replace(/^R«(.*?)»/, '$1')
    .replace(/^Query«(.*?)»/, '$1')
    .replace(/^Cmd«(.*?)»/, '$1');
});

const chooseTest = async item => {
  const { code } = item;
  apiState.testCode = code;
  await setValue('testCode')(code);
};

const testStage = async item => {
  apiState.testMap[apiState.testCode].logState[item.code] = [];
  item.test();
};

const checkJson1AndJson2 = async item => {
  console.log(item);
  const { data } = item;
  await setValue('json1')(data.json1);
  await setValue('json2')(data.json2);
};

const apiTestLog = computed(() => item => {
  const { code } = item;
  return apiState.testMap[apiState.testCode].logState[code];
});

const apiTestState = computed(() => item => {
  return apiState.testMap[apiState.testCode]?.stage;
});
</script>

<template>
  <v s="w-grow h-grow">
    <v s="w-96 h-grow" col>
      <v s="w-96 h-fit">
        <!-- prettier-ignore -->
        <v s="w-grow h-grow" grid> 
          <dz-form-item s="w-full h-fit" v-bind="bind('description')('Input')({}, {})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('version')('Input')({}, {})" />
          <dz-form-item s="w-full h-fit" v-bind="bind('title')('Input')({}, {})" />
        </v>
      </v>

      <v s="w-grow h-10" w="border-y-2  p-2 shadow-inner gap-2">
        <dz-btn
          title="单元测试"
          icon="mdi:flower"
          @click="apiState.testMode = 'api'"
        />
        <dz-btn
          title="集成测试"
          icon="mdi:flower"
          @click="apiState.testMode = 'test'"
        />
        {{ apiState.testMode }}
        <v-space s="w-grow" />
        <v-text :text="String(apiState.pathList.length)" />
      </v>

      <!-- 单元测试 -->
      <v
        v-if="apiState.testMode === 'api'"
        s="w-grow h-grow"
        w="overflow-auto"
        col
      >
        <template v-for="(item, index) of apiState.pathList" :key="index">
          <v
            s="w-grow h-fit"
            w="border-b-2 p-2"
            col
            :class="[
              apiState.pathCode == item.code ? 'bg-blue-100' : 'bg-white',
            ]"
            pointer
            trans="hover:bg-gray-200"
            @click="chooseApiPath(item)"
          >
            <!-- prettier-ignore -->
            <v s="w-grow h-fit">
              <v-icon v-if="item.cqrs === 'query'" v="6-75" t="text-blue-500" icon="mdi:magnify" />
              <v-icon v-if="item.cqrs === 'cmd'" v="6-75" icon="mdi:terminal" />
              <v-text :text="item.code" />
              <v-space w="w-grow h-fit" />
              
              <v v-if="apiState.pathCode == item.code" s="w-4 h-4" w="bg-blue-500" />
            </v>

            <v s="w-grow h-fit">
              <v s="w-1/2 h-fit">
                <v-text
                  :class="[
                    getTypeAmongWarpper(item.requestIndex) === 'object'
                      ? 'text-red-400'
                      : '',
                  ]"
                  :text="getTypeAmongWarpper(item.requestIndex)"
                />
              </v>
              <v s="w-1/2 h-fit">
                <v-text :text="getTypeAmongWarpper(item.responseIndex)" />
              </v>
            </v>
          </v>
        </template>
      </v>

      <!-- 集成测试 -->
      <v
        v-if="apiState.testMode === 'test'"
        s="w-grow h-grow"
        w="overflow-auto"
        col
      >
        <template v-for="(item, index) of apiState.testList" :key="index">
          <v
            s="w-grow h-fit"
            w="border-b-2 p-2"
            col
            :class="[
              apiState.pathCode == item.code ? 'bg-blue-100' : 'bg-white',
            ]"
            pointer
            trans="hover:bg-gray-200"
            @click="chooseTest(item)"
          >
            <!-- prettier-ignore -->
            <v s="w-grow h-fit">
              <v-icon v-if="item.cqrs === 'query'" v="6-75" t="text-blue-500" icon="mdi:magnify" />
              <v-icon v-if="item.cqrs === 'cmd'" v="6-75" icon="mdi:terminal" />
              <v-text :text="item.code" />
              <v-space w="w-grow h-fit" />
              
              <v v-if="apiState.pathCode == item.code" s="w-4 h-4" w="bg-blue-500" />
            </v>

            <v s="w-grow h-fit" grid> </v>
          </v>
        </template>
      </v>
    </v>

    <v v-if="apiState.testMode === 'api'" s="w-grow h-grow" grid>
      <dz-form-item
        s="w-full h-fit"
        v-bind="bind('apiPath')('Input')({}, {})"
      />
      <dz-form-item
        s="w-1/2 h-fit"
        v-bind="bind('request')('Json', { bodyClass: 'h-[60vh]' })({}, {})"
      />
      <dz-form-item
        s="w-1/2 h-fit"
        v-bind="bind('response')('Json', { bodyClass: 'h-[60vh]' })({}, {})"
      />
    </v>

    <!-- stage -->
    <v
      v-if="apiState.testMode === 'test'"
      s="w-96 h-grow"
      w="overflow-auto"
      col
    >
      <dz-form-item
        s="w-full h-fit"
        v-bind="bind('testCode')('Input', {})({}, {})"
      />
      <template
        v-for="(item, index) of apiState.testMap[apiState.testCode]?.stage"
        :key="index"
      >
        <v s="w-grow h-fit" w="border-b-2" col>
          <v
            s="w-grow h-8"
            w="bg-white p-2"
            pointer
            trans="hover:bg-gray-200"
            @click="testStage(item)"
          >
            <v-text :text="item.code" />
          </v>
          <v s="w-grow h-fit" grid>
            <template v-for="(item2, index2) of apiTestLog(item)" :key="index2">
              <dz-popover :tooltip="item2.message">
                <v s="w-fit h-fit" v="mouse-gray">
                  <v-icon
                    v="8-75"
                    :t="item2.isError ? 'text-red-500' : 'text-green-500'"
                    :icon="item2.isError ? 'mdi:error' : 'mdi:checkbox-marked'"
                    @click="checkJson1AndJson2(item2)"
                  />
                </v>
              </dz-popover>
            </template>
            <v-space s="w-grow" />
            <v
              s="w-fit h-fit"
              v="mouse-gray"
              @click="
                apiState.testStageStepMap[item.code] =
                  !apiState.testStageStepMap[item.code]
              "
            >
              <v-icon v="8-75" icon="mdi:more" />
            </v>
          </v>
          <v
            :class="[
              apiState.testStageStepMap[item.code]
                ? 'max-h-[9999px]'
                : 'max-h-0',
            ]"
            w="overflow-hidden"
            s="w-grow h-fit"
            col
            trans
          >
            <template v-for="(item2, index2) of apiTestLog(item)" :key="index2">
              <v
                s="w-grow h-fit"
                v="mouse-gray"
                @click="checkJson1AndJson2(item2)"
              >
                <dz-popover :tooltip="item2.message">
                  <v-icon
                    v="8-75"
                    :t="item2.isError ? 'text-red-500' : 'text-green-500'"
                    :icon="item2.isError ? 'mdi:error' : 'mdi:checkbox-marked'"
                  />
                  <v-text :text="item2.message" />
                </dz-popover>
              </v>
            </template>
          </v>
        </v>
      </template>
    </v>

    <v
      v-if="apiState.testMode === 'test'"
      s="w-grow h-grow"
      w="overflow-auto"
      grid
    >
      <dz-form-item
        s="w-full h-fit"
        v-bind="bind('json1')('Json', { bodyClass: 'h-[40vh]' })({}, {})"
      />
      <dz-form-item
        s="w-full h-fit"
        v-bind="bind('json2')('Json', { bodyClass: 'h-[40vh]' })({}, {})"
      />
    </v>
  </v>
</template>
