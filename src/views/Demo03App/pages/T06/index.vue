<script setup lang="ts">
import PaneTool from './components/PaneTool/index.vue';
import { useTool } from './hooks/useTool';
const optionMap = {
  t1: ['1', '2'],
  t2: ['1', '2'],
  t3: ['1', '2'],
  t4: ['1', '2'],
  t5: ['1', '2'],
  t6: ['1', '2'],
};
const { handleChangeIndex, optionState, optionListState } = useTool({ optionMap });
</script>

<template>
  <dz-view layout="col" grow="0" size="w-full h-full">
    <dz-view layout="one" grow="0" size="w-auto h-16">
      <div pane flex-grow-0 class="w-auto h-full">1 one</div>
    </dz-view>

    <dz-view layout="one" grow="0" size="w-auto h-16">
      <div pane flex-grow-0 class="w-[2000px] h-full">1.1 overflow-x</div>
    </dz-view>

    <dz-view layout="one" grow="0" size="w-auto h-16">
      <div pane flex-grow-0 class="w-auto h-[100px] shrink-0">1.2 overflow-y</div>
    </dz-view>

    <dz-view layout="one" grow="0" size="w-auto h-16">
      <div pane flex-grow-0 class="w-[2000px] h-[100px] shrink-0">1.3 overflow-xy</div>
    </dz-view>

    <dz-view layout="one" grow="0" size="w-auto h-16">
      <dz-view layout="one" grow="0" size="w-auto h-16">
        <div pane flex-grow-0 class="w-[2000px] h-[100px] shrink-0">1.3 overflow-xy</div>
      </dz-view>
    </dz-view>

    <dz-view layout="row" grow="0" size="w-auto h-16">
      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
        <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="1" size="w-0 h-full">
        <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="1" size="w-0 h-full">
        <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="1" size="w-16 h-full">
        <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
      </dz-wrapper>
    </dz-view>

    <dz-view layout="one" grow="0" size="w-auto h-16">
      <!-- components -->
      <!-- 子组件的 size of root 都是 未知的 -->
      <dz-view layout="row" grow="0" size="w-[2000px] h-32 shrink-0">
        <dz-wrapper layout="col" grow="0" size="w-16 h-full">
          <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
        </dz-wrapper>
        <dz-wrapper layout="col" grow="0" size="w-16 h-full">
          <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
        </dz-wrapper>
        <dz-wrapper layout="col" grow="1" size="w-0 h-full">
          <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
        </dz-wrapper>
        <dz-wrapper layout="col" grow="1" size="w-0 h-full">
          <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
        </dz-wrapper>
        <dz-wrapper layout="col" grow="0" size="w-16 h-full">
          <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
        </dz-wrapper>
      </dz-view>
    </dz-view>

    <dz-view layout="one" grow="0" size="w-auto h-16">
      <!-- components -->
      <dz-view layout="one" grow="0" size="w-auto h-full">
        <dz-view layout="row" grow="0" size="w-[2000px] h-32 shrink-0">
          <dz-wrapper layout="col" grow="0" size="w-16 h-full">
            <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
          </dz-wrapper>
          <dz-wrapper layout="col" grow="0" size="w-16 h-full">
            <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
          </dz-wrapper>
          <dz-wrapper layout="col" grow="1" size="w-0 h-full">
            <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
          </dz-wrapper>
          <dz-wrapper layout="col" grow="1" size="w-0 h-full">
            <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
          </dz-wrapper>
          <dz-wrapper layout="col" grow="0" size="w-16 h-full">
            <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
          </dz-wrapper>
        </dz-view>
      </dz-view>
      <!-- components -->
    </dz-view>

    <dz-view layout="row" grow="0" size="w-auto h-16">
      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
        <div pane flex-grow-0 class="h-full w-[2000px]">2 row 64</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
        <div pane flex-grow-0 class="h-[200px] w-auto shrink-0">2 row 64</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
        <div pane flex-grow-0 class="h-[200px] w-[2000px] shrink-0">2 row 64</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
        <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="1" size="w-0 h-full">
        <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="1" size="w-0 h-full">
        <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
        <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
      </dz-wrapper>
    </dz-view>

    <dz-view layout="row" grow="1" size="w-auto h-0">
      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
        <div pane flex-grow-0 class="h-full w-[2000px]">2 row 64</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
        <div pane flex-grow-0 class="h-[2000px] w-auto shrink-0">2 row 64</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
        <div pane flex-grow-0 class="h-[2000px] w-[2000px] shrink-0">2 row 64</div>
      </dz-wrapper>
      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
        <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
      </dz-wrapper>

      <dz-wrapper layout="col" grow="1" size="w-0 h-full">
        <div pane flex-grow-0 class="w-auto h-full">
          <!-- 3 -->
          <dz-view layout="col" grow="0" size="w-full h-full">
            <dz-view layout="one" grow="0" size="w-auto h-16">
              <div pane flex-grow-0 class="w-auto h-full">1 one</div>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <div pane flex-grow-0 class="w-[2000px] h-full">1.1 overflow-x</div>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <div pane flex-grow-0 class="w-auto h-[100px] shrink-0">1.2 overflow-y</div>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <div pane flex-grow-0 class="w-[2000px] h-[100px] shrink-0">1.3 overflow-xy</div>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <dz-view layout="one" grow="0" size="w-auto h-16">
                <div pane flex-grow-0 class="w-[2000px] h-[100px] shrink-0">1.3 overflow-xy</div>
              </dz-view>
            </dz-view>

            <dz-view layout="row" grow="0" size="w-auto h-16">
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="1" size="w-16 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
              </dz-wrapper>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <!-- components -->
              <!-- 子组件的 size of root 都是 未知的 -->
              <dz-view layout="row" grow="0" size="w-[2000px] h-32 shrink-0">
                <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                  <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                </dz-wrapper>
                <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                  <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                </dz-wrapper>
                <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                  <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                </dz-wrapper>
                <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                  <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                </dz-wrapper>
                <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                  <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                </dz-wrapper>
              </dz-view>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <!-- components -->
              <dz-view layout="one" grow="0" size="w-auto h-full">
                <dz-view layout="row" grow="0" size="w-[2000px] h-32 shrink-0">
                  <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                  </dz-wrapper>
                </dz-view>
              </dz-view>
              <!-- components -->
            </dz-view>

            <dz-view layout="row" grow="0" size="w-auto h-16">
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="h-full w-[2000px]">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="h-[200px] w-auto shrink-0">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="h-[200px] w-[2000px] shrink-0">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
              </dz-wrapper>
            </dz-view>

            <dz-view layout="row" grow="1" size="w-auto h-0">
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="h-full w-[2000px]">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="h-[2000px] w-auto shrink-0">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="h-[2000px] w-[2000px] shrink-0">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
              </dz-wrapper>

              <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                <div pane flex-grow-0 class="w-auto h-full">
                  <!-- 3 -->

                  <!-- 3 -->
                </div>
              </dz-wrapper>

              <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                <!-- s -->
                <dz-view layout="row" grow="1" size="w-auto h-0">
                  <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                    <div pane flex-grow-0 class="h-full w-[2000px]">col1</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                    <div pane flex-grow-0 class="h-[2000px] w-auto shrink-0">2 row 64</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                    <div pane flex-grow-0 class="h-[2000px] w-[2000px] shrink-0">2 row 64</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">col1</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                    <!-- s -->
                    <dz-view layout="one" grow="0" size="w-auto h-16">
                      <div pane flex-grow-0 class="w-auto h-full">1 one</div>
                    </dz-view>

                    <dz-view layout="one" grow="0" size="w-auto h-16">
                      <div pane flex-grow-0 class="w-[2000px] h-full">1.1 overflow-x</div>
                    </dz-view>

                    <dz-view layout="one" grow="0" size="w-auto h-16">
                      <div pane flex-grow-0 class="w-auto h-[100px] shrink-0">1.2 overflow-y</div>
                    </dz-view>

                    <dz-view layout="one" grow="0" size="w-auto h-16">
                      <div pane flex-grow-0 class="w-[2000px] h-[100px] shrink-0">1.3 overflow-xy</div>
                    </dz-view>

                    <dz-view layout="one" grow="0" size="w-auto h-16">
                      <dz-view layout="one" grow="0" size="w-auto h-16">
                        <div pane flex-grow-0 class="w-[2000px] h-[100px] shrink-0">1.3 overflow-xy</div>
                      </dz-view>
                    </dz-view>

                    <dz-view layout="row" grow="0" size="w-auto h-16">
                      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                        <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                      </dz-wrapper>
                      <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                        <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                      </dz-wrapper>
                      <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                        <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                      </dz-wrapper>
                      <dz-wrapper layout="col" grow="1" size="w-16 h-full">
                        <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                      </dz-wrapper>
                    </dz-view>

                    <dz-view layout="one" grow="0" size="w-auto h-16">
                      <!-- components -->
                      <!-- 子组件的 size of root 都是 未知的 -->
                      <dz-view layout="row" grow="0" size="w-[2000px] h-32 shrink-0">
                        <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                          <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                        </dz-wrapper>
                        <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                          <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                        </dz-wrapper>
                        <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                          <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                        </dz-wrapper>
                        <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                          <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                        </dz-wrapper>
                        <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                          <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                        </dz-wrapper>
                      </dz-view>
                    </dz-view>

                    <dz-view layout="one" grow="0" size="w-auto h-16">
                      <!-- components -->
                      <dz-view layout="one" grow="0" size="w-auto h-full">
                        <dz-view layout="row" grow="0" size="w-[2000px] h-32 shrink-0">
                          <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                            <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                          </dz-wrapper>
                          <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                            <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                          </dz-wrapper>
                          <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                            <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                          </dz-wrapper>
                          <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                            <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                          </dz-wrapper>
                          <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                            <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                          </dz-wrapper>
                        </dz-view>
                      </dz-view>
                      <!-- components -->
                    </dz-view>

                    <dz-view layout="row" grow="0" size="w-auto h-16">
                      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                        <div pane flex-grow-0 class="h-full w-[2000px]">2 row 64</div>
                      </dz-wrapper>
                      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                        <div pane flex-grow-0 class="h-[200px] w-auto shrink-0">2 row 64</div>
                      </dz-wrapper>
                      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                        <div pane flex-grow-0 class="h-[200px] w-[2000px] shrink-0">2 row 64</div>
                      </dz-wrapper>
                      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                        <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                      </dz-wrapper>
                      <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                        <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                      </dz-wrapper>
                      <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                        <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                      </dz-wrapper>
                      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                        <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                      </dz-wrapper>
                    </dz-view>

                    <!-- s -->
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row 08</div>
                  </dz-wrapper>
                </dz-view>
                <!-- s -->
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row 18</div>
              </dz-wrapper>
            </dz-view>
          </dz-view>
          <!-- 3 -->
        </div>
      </dz-wrapper>

      <dz-wrapper layout="col" grow="1" size="w-0 h-full">
        <!-- s -->
        <dz-view layout="row" grow="1" size="w-auto h-0">
          <dz-wrapper layout="col" grow="0" size="w-16 h-full">
            <div pane flex-grow-0 class="h-full w-[2000px]">col1</div>
          </dz-wrapper>
          <dz-wrapper layout="col" grow="0" size="w-16 h-full">
            <div pane flex-grow-0 class="h-[2000px] w-auto shrink-0">2 row 64</div>
          </dz-wrapper>
          <dz-wrapper layout="col" grow="0" size="w-16 h-full">
            <div pane flex-grow-0 class="h-[2000px] w-[2000px] shrink-0">2 row 64</div>
          </dz-wrapper>
          <dz-wrapper layout="col" grow="0" size="w-16 h-full">
            <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
          </dz-wrapper>
          <dz-wrapper layout="col" grow="1" size="w-0 h-full">
            <div pane flex-grow-0 class="w-auto h-full">col1</div>
          </dz-wrapper>
          <dz-wrapper layout="col" grow="1" size="w-0 h-full">
            <!-- s -->
            <dz-view layout="one" grow="0" size="w-auto h-16">
              <div pane flex-grow-0 class="w-auto h-full">1 one</div>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <div pane flex-grow-0 class="w-[2000px] h-full">1.1 overflow-x</div>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <div pane flex-grow-0 class="w-auto h-[100px] shrink-0">1.2 overflow-y</div>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <div pane flex-grow-0 class="w-[2000px] h-[100px] shrink-0">1.3 overflow-xy</div>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <dz-view layout="one" grow="0" size="w-auto h-16">
                <div pane flex-grow-0 class="w-[2000px] h-[100px] shrink-0">1.3 overflow-xy</div>
              </dz-view>
            </dz-view>

            <dz-view layout="row" grow="0" size="w-auto h-16">
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="1" size="w-16 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
              </dz-wrapper>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <!-- components -->
              <!-- 子组件的 size of root 都是 未知的 -->
              <dz-view layout="row" grow="0" size="w-[2000px] h-32 shrink-0">
                <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                  <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                </dz-wrapper>
                <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                  <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                </dz-wrapper>
                <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                  <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                </dz-wrapper>
                <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                  <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                </dz-wrapper>
                <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                  <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                </dz-wrapper>
              </dz-view>
            </dz-view>

            <dz-view layout="one" grow="0" size="w-auto h-16">
              <!-- components -->
              <dz-view layout="one" grow="0" size="w-auto h-full">
                <dz-view layout="row" grow="0" size="w-[2000px] h-32 shrink-0">
                  <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
                  </dz-wrapper>
                  <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                    <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
                  </dz-wrapper>
                </dz-view>
              </dz-view>
              <!-- components -->
            </dz-view>

            <dz-view layout="row" grow="0" size="w-auto h-16">
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="h-full w-[2000px]">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="h-[200px] w-auto shrink-0">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="h-[200px] w-[2000px] shrink-0">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="1" size="w-0 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row grow</div>
              </dz-wrapper>
              <dz-wrapper layout="col" grow="0" size="w-16 h-full">
                <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
              </dz-wrapper>
            </dz-view>

            <!-- s -->
          </dz-wrapper>
          <dz-wrapper layout="col" grow="0" size="w-16 h-full">
            <div pane flex-grow-0 class="w-auto h-full">2 row 08</div>
          </dz-wrapper>
        </dz-view>
        <!-- s -->
      </dz-wrapper>
      <dz-wrapper layout="col" grow="0" size="w-16 h-full">
        <div pane flex-grow-0 class="w-auto h-full">2 row 18</div>
      </dz-wrapper>
    </dz-view>

    <dz-view layout="one" grow="0" size="w-auto h-64">
      <div pane flex-grow-0 class="w-auto h-full">2 row 64</div>
    </dz-view>
  </dz-view>

  <PaneTool @handleOptionClick="handleChangeIndex" :optionState="optionState" :optionListState="optionListState" />
</template>

<style>
[flex-grow-1] {
  @apply flex-grow;
}

[flex-grow-0] {
  @apply flex-grow-0;
}
[overflow] {
  @apply overflow-auto;
}
[col] {
  @apply flex flex-col flex-nowrap;
}
[one] {
  @apply flex flex-row flex-wrap;
}
[grid] {
  @apply flex flex-row flex-wrap;
}
[row] {
  @apply flex flex-row flex-nowrap;
}

[layout] {
  @apply border-2 border-green-600;
}

[wrapper] {
  @apply border-2 border-red-600;
}

[pane] {
  @apply border-2 border-blue-300;
}
</style>
