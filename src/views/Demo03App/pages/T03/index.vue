<script setup lang="ts">
import PaneTool from './components/PaneTool/index.vue';
import { useTool } from './hooks/useTool';
const optionMap = {
  'h-0': ['show', 'hidden'],
  'h-16': ['show', 'hidden'],
  'h-auto': ['show', 'hidden'],
  'h-full': ['show', 'hidden'],
  'h-fit': ['show', 'hidden'],
  'h-max': ['show', 'hidden'],
  'h-min': ['show', 'hidden'],
  son: ['text', 'box', 'grow', 'full'],
};
const { handleChangeIndex, optionState, optionListState } = useTool({ optionMap });
</script>

<template>
  <div layout one>
    <div wrapper col overflow>
      <div pane></div>
    </div>
  </div>

  <div layout w-16 h-16 one>
    <div wrapper w-auto h-auto col overflow>
      <div pane></div>
    </div>
  </div>

  <div layout w-min h-16 one>
    <div wrapper w-auto h-auto col overflow>
      <div pane></div>
    </div>
  </div>

  <div layout w-max h-16 one>
    <div wrapper w-auto h-auto col overflow>
      <div pane></div>
    </div>
  </div>

  <div layout w-16 h-grow one>
    <div wrapper w-auto h-xxx col overflow>
      <div pane></div>
    </div>
  </div>

  <div layout w-grow h-16 one>
    <div wrapper w-xxx h-xxx col overflow>
      <div pane></div>
    </div>
  </div>

  <div layout w-grow h-grow one>
    <div wrapper w-xxx h-xxx col overflow>
      <div pane></div>
    </div>
  </div>

  <div layout one>
    <div wrapper col overflow>
      <div layout one>
        <div wrapper col overflow>
          <div pane></div>
        </div>
      </div>
    </div>
  </div>

  <div layout one>
    <div wrapper col overflow>
      <div layout one>
        <div wrapper col overflow>
          <div layout one>
            <div wrapper col overflow>
              <div pane></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div layout row>
    <div wrapper col overflow>
      <div layout one>
        <div wrapper col overflow>
          <div pane></div>
        </div>
      </div>
    </div>
    <div wrapper col overflow>
      <div layout one>
        <div wrapper col overflow>
          <div pane></div>
        </div>
      </div>
    </div>
  </div>

  <div layout grid>
    <div wrapper col overflow>
      <div layout one>
        <div wrapper col overflow>
          <div pane></div>
        </div>
      </div>
    </div>
    <div wrapper col overflow>
      <div layout one>
        <div wrapper col overflow>
          <div pane></div>
        </div>
      </div>
    </div>
  </div>

  <div layout col>
    <div wrapper col overflow>
      <div layout one>
        <div wrapper col overflow>
          <div pane></div>
        </div>
      </div>
    </div>
    <div wrapper col overflow>
      <div layout one>
        <div wrapper col overflow>
          <div pane></div>
        </div>
      </div>
    </div>
  </div>

  <PaneTool @handleOptionClick="handleChangeIndex" :optionState="optionState" :optionListState="optionListState" />
</template>
