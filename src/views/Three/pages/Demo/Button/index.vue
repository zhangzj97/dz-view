<script setup lang="ts"></script>

<template>
  <dz-view col size="h-grow" position="1" wrapper-class="p-4 m-4 border rounded-md shadow">
    <dz-view col size="h-fit w-full" position="1">
      <dz-font>primary</dz-font>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button primary />
        <dz-button primary icon="ic:baseline-11mp" />
        <dz-button primary title="空的数据" />
        <dz-button primary icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button primary disable />
        <dz-button primary disable icon="ic:baseline-11mp" />
        <dz-button primary disable title="空的数据" />
        <dz-button primary disable icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button primary loading />
        <dz-button primary loading icon="ic:baseline-11mp" />
        <dz-button primary loading title="空的数据" />
        <dz-button primary loading icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>

      <dz-font>danger</dz-font>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button danger />
        <dz-button danger icon="ic:baseline-11mp" />
        <dz-button danger title="空的数据" />
        <dz-button danger icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button danger disable />
        <dz-button danger disable icon="ic:baseline-11mp" />
        <dz-button danger disable title="空的数据" />
        <dz-button danger disable icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button danger loading />
        <dz-button danger loading icon="ic:baseline-11mp" />
        <dz-button danger loading title="空的数据" />
        <dz-button danger loading icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>

      <dz-font>default</dz-font>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button />
        <dz-button icon="ic:baseline-11mp" />
        <dz-button title="空的数据" />
        <dz-button icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button disable />
        <dz-button disable icon="ic:baseline-11mp" />
        <dz-button disable title="空的数据" />
        <dz-button disable icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button loading />
        <dz-button loading icon="ic:baseline-11mp" />
        <dz-button loading title="空的数据" />
        <dz-button loading icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>

      <dz-font>text</dz-font>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button text />
        <dz-button text icon="ic:baseline-11mp" />
        <dz-button text title="空的数据" />
        <dz-button text icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button text disable />
        <dz-button text disable icon="ic:baseline-11mp" />
        <dz-button text disable title="空的数据" />
        <dz-button text disable icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button text loading />
        <dz-button text loading icon="ic:baseline-11mp" />
        <dz-button text loading title="空的数据" />
        <dz-button text loading icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>

      <dz-font>link</dz-font>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button link />
        <dz-button link icon="ic:baseline-11mp" />
        <dz-button link title="空的数据" />
        <dz-button link icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button link loading />
        <dz-button link loading icon="ic:baseline-11mp" />
        <dz-button link loading title="空的数据" />
        <dz-button link loading icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>
      <dz-view row size="h-12" wrapper-class="gap-2">
        <dz-button link disable />
        <dz-button link disable icon="ic:baseline-11mp" />
        <dz-button link disable title="空的数据" />
        <dz-button link disable icon="ic:baseline-11mp" title="空的数据" />
      </dz-view>
    </dz-view>

    <dz-view row size="h-16" position="5" wrapper-class="gap-2">
      <a-button>返回首页</a-button>
      <a-button>刷新</a-button>
    </dz-view>
  </dz-view>
</template>
