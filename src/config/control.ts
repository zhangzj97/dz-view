import Hidden from '@/components/Control/Input/Hidden/index.vue';
import Text from '@/components/Control/Input/Text/index.vue';
import Textarea from '@/components/Control/Input/Textarea/index.vue';
import String from '@/components/Control/Input/String/index.vue';
import Number from '@/components/Control/Input/Number/index.vue';
import Password from '@/components/Control/Input/Password/index.vue';

import Time from '@/components/Control/Time/Time/index.vue';
import TimeRange from '@/components/Control/Time/TimeRange/index.vue';

import Picker from '@/components/Control/Picker/Picker/index.vue';
import PickerList from '@/components/Control/Picker/PickerList/index.vue';
import PickerPop from '@/components/Control/Picker/PopPicker/index.vue';
import PickerListPop from '@/components/Control/Picker/PopPickerList/index.vue';

import File from '@/components/Control/File/index.vue';
import Range from '@/components/Control/Range/index.vue';
import Color from '@/components/Control/Color/index.vue';

// import SqlField from '@/components/Control/SqlField/index.vue';
import Json from '@/components/Control/Other/Json/index.vue';

const build =
  (component, payload1 = {}) =>
  payload2 => {
    return { ...payload2, ...payload1, component: () => component };
  };

export const Control = {
  Base: {
    Hidden: build(Hidden),
    Text: build(Text),
    Textarea: build(Textarea),
    String: build(String),
    Number: build(Number),
    Password: build(Password),
    File: build(File),

    Range: build(Range),

    Color: build(Color),

    Time: build(Time),
    TimePop: build(Time, { embed: 'col' }),
    TimeRange: build(TimeRange),
    TimeRangePop: build(TimeRange, { embed: 'col' }),

    Picker: build(Picker),
    PickerPop: build(PickerPop),
    PickerList: build(PickerList),
    PickerListPop: build(PickerListPop),
  },

  Json: {
    Json: build(Json),
  },

  // Sql: {
  //   SqlField: build(SqlField),
  // },
} as const;
