<script setup lang="ts">
import { useModal } from '@/hooks/useModal';

const {
  visible: visible01,
  fullScreen: fullscreen01,
  setVisible: setVisible01,
} = useModal();
const {
  visible: visible02,
  fullScreen: fullscreen02,
  setVisible: setVisible02,
} = useModal();
const {
  visible: visible03,
  fullScreen: fullscreen03,
  setVisible: setVisible03,
} = useModal();
const {
  visible: visible04,
  fullScreen: fullscreen04,
  setVisible: setVisible04,
} = useModal();
const {
  visible: visible05,
  fullScreen: fullscreen05,
  setVisible: setVisible05,
} = useModal();
const {
  visible: visible06,
  fullScreen: fullscreen06,
  setVisible: setVisible06,
} = useModal();
const {
  visible: visible07,
  fullScreen: fullscreen07,
  setVisible: setVisible07,
} = useModal();
const {
  visible: visible08,
  fullScreen: fullscreen08,
  setVisible: setVisible08,
} = useModal();
const {
  visible: visible09,
  fullScreen: fullscreen09,
  setVisible: setVisible09,
} = useModal();

const updateVisible01 = (value: boolean) => {
  setVisible01({ visible: value });
};

const updateVisible02 = (value: boolean) => {
  setVisible02({ visible: value });
};

const updateVisible03 = (value: boolean) => {
  setVisible03({ visible: value });
};

const updateVisible04 = (value: boolean) => {
  setVisible04({ visible: value });
};

const updateVisible05 = (value: boolean) => {
  setVisible05({ visible: value });
};

const updateVisible06 = (value: boolean) => {
  console.log(88);
  setVisible06({ visible: value });
};

const updateVisible07 = (value: boolean) => {
  setVisible07({ visible: value });
};

const updateVisible08 = (value: boolean) => {
  setVisible08({ visible: value });
};

const updateVisible09 = (value: boolean) => {
  console.log(99);
  setVisible09({ visible: value });
};

const handleOk = () => {
  console.log('Good Job');
};
</script>

<template>
  <dz-view
    col
    size="h-grow"
    position="1"
    wrapper-class="p-4 m-4 border rounded-md shadow"
  >
    <dz-font lg>Modal</dz-font>
    <dz-font>常态</dz-font>

    <dz-view row size="h-16">
      <dz-popover tooltip="这是一个危险操作">
        <dz-button danger title="需要再次确认的危险操作" />
      </dz-popover>
    </dz-view>

    <dz-view row size="h-16" wrapper-class="gap-2">
      <dz-popover tooltip="点击弹出信息通知">
        <dz-button title="drawer 空白" @click="updateVisible08(true)" />
      </dz-popover>
      <dz-modal
        :model-value="visible08"
        @update:model-value="updateVisible08"
        drawer
      />

      <dz-popover tooltip="点击弹出信息通知">
        <dz-button title="drawer title" @click="updateVisible09(true)" />
      </dz-popover>
      <dz-modal
        title="123"
        :visible="visible09"
        drawer
        @updateVisible="updateVisible09"
      />

      <dz-popover tooltip="点击弹出信息通知">
        <dz-button title="drawer footer" @click="updateVisible09(true)" />
      </dz-popover>
      <dz-modal
        title="123"
        :visible="visible09"
        drawer
        @updateVisible="updateVisible09"
      >
        <dz-view col size="h-grow" wrapper-class="p-2">
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
          <dz-font>123</dz-font>
        </dz-view>
        <template #footer>
          <dz-view row size="h-12" position="4" wrapper-class="gap-1 px-2">
            <dz-button title="1" />
            <dz-button title="2" />
          </dz-view>
        </template>
      </dz-modal>
    </dz-view>

    <dz-view row size="h-16" wrapper-class="gap-2">
      <dz-popover tooltip="点击弹出信息通知">
        <dz-button title="dialog 空白" @click="updateVisible06(true)" />
      </dz-popover>
      <dz-modal :visible="visible06" @update-visible="updateVisible06">
        <dz-font class=""
          >3322 32 33 2 2 3 23 3 2232332 32332 232 332 2323 22323322323 3
          22323322323 223233223233 23233 23233 223 23322323322 233223233223
          33223 332232332232332232 32232332232332232 33223233223 332232332232
          322323322323322323322323 322323322323322323322323
          322323322323322323322323 2232332232
        </dz-font>
        <dz-font class=""
          >3322 32 33 2 2 3 23 3 2232332 32332 232 332 2323 22323322323 3
          22323322323 223233223233 23233 23233 223 23322323322 233223233223
          33223 332232332232332232 32232332232332232 33223233223 332232332232
          322323322323322323322323 322323322323322323322323
          322323322323322323322323 2232332232
        </dz-font>
        <dz-font class=""
          >3322 32 33 2 2 3 23 3 2232332 32332 232 332 2323 22323322323 3
          22323322323 223233223233 23233 23233 223 23322323322 233223233223
          33223 332232332232332232 32232332232332232 33223233223 332232332232
          322323322323322323322323 322323322323322323322323
          322323322323322323322323 2232332232
        </dz-font>
        <dz-font class=""
          >3322 32 33 2 2 3 23 3 2232332 32332 232 332 2323 22323322323 3
          22323322323 223233223233 23233 23233 223 23322323322 233223233223
          33223 332232332232332232 32232332232332232 33223233223 332232332232
          322323322323322323322323 322323322323322323322323
          322323322323322323322323 2232332232
        </dz-font>
        <dz-font class=""
          >3322 32 33 2 2 3 23 3 2232332 32332 232 332 2323 22323322323 3
          22323322323 223233223233 23233 23233 223 23322323322 233223233223
          33223 332232332232332232 32232332232332232 33223233223 332232332232
          322323322323322323322323 322323322323322323322323
          322323322323322323322323 2232332232
        </dz-font>
        <dz-font class=""
          >3322 32 33 2 2 3 23 3 2232332 32332 232 332 2323 22323322323 3
          22323322323 223233223233 23233 23233 223 23322323322 233223233223
          33223 332232332232332232 32232332232332232 33223233223 332232332232
          322323322323322323322323 322323322323322323322323
          322323322323322323322323 2232332232
        </dz-font>
        <dz-font class=""
          >3322 32 33 2 2 3 23 3 2232332 32332 232 332 2323 22323322323 3
          22323322323 223233223233 23233 23233 223 23322323322 233223233223
          33223 332232332232332232 32232332232332232 33223233223 332232332232
          322323322323322323322323 322323322323322323322323
          322323322323322323322323 2232332232
        </dz-font>
        <dz-font class=""
          >3322 32 33 2 2 3 23 3 2232332 32332 232 332 2323 22323322323 3
          22323322323 223233223233 23233 23233 223 23322323322 233223233223
          33223 332232332232332232 32232332232332232 33223233223 332232332232
          322323322323322323322323 322323322323322323322323
          322323322323322323322323 2232332232
        </dz-font>
        <dz-font class=""
          >3322 32 33 2 2 3 23 3 2232332 32332 232 332 2323 22323322323 3
          22323322323 223233223233 23233 23233 223 23322323322 233223233223
          33223 332232332232332232 32232332232332232 33223233223 332232332232
          322323322323322323322323 322323322323322323322323
          322323322323322323322323 2232332232
        </dz-font>
        <dz-font class=""
          >3322 32 33 2 2 3 23 3 2232332 32332 232 332 2323 22323322323 3
          22323322323 223233223233 23233 23233 223 23322323322 233223233223
          33223 332232332232332232 32232332232332232 33223233223 332232332232
          322323322323322323322323 322323322323322323322323
          322323322323322323322323 2232332232
        </dz-font>
        <dz-font>332232</dz-font>
        <dz-font>332232</dz-font>
        <dz-font>332232</dz-font>
        <dz-font>332232</dz-font>

        <template #footer>
          <dz-view row size="h-12" position="6" wrapper-class="gap-1 px-2">
            <dz-button title="1" />
            <dz-button title="2" />
          </dz-view>
        </template>
      </dz-modal>
    </dz-view>
  </dz-view>
</template>
