import Textarea from '@/components/Control/Input/Textarea/index.vue';
import String from '@/components/Control/Input/String/index.vue';
import Number from '@/components/Control/Input/Number/index.vue';

import Time from '@/components/Control/Time/Time/index.vue';
import TimeRange from '@/components/Control/Time/TimeRange/index.vue';

import Picker from '@/components/Control/Picker/Picker/index.vue';

// import SqlField from '@/components/Control/SqlField/index.vue';
import Json from '@/components/Control/Other/Json/index.vue';

const build =
  (component, payload1 = {}) =>
  (payload2 = {}) => {
    return { ...payload2, ...payload1, component: () => component };
  };

export const Control = {
  Base: {
    Text: build(Textarea, { embed: 'col', readonly: true }),
    Textarea: build(Textarea, { embed: 'col' }),
    String: build(String, { embed: 'col' }),
    Number: build(Number, { embed: 'col' }),
    Password: build(String, { embed: 'col', inputType: 'password', isPasswordText: 'true' }),

    Time: build(Time, { embed: false, format: 'YYYY-MM-DD HH:mm:ss' }),
    TimeRange: build(TimeRange, { embed: false, format: 'YYYY-MM-DD HH:mm:ss' }),
    Date: build(Time, { embed: false, hiddenTime: true, format: 'YYYY-MM-DD' }),
    DateRange: build(TimeRange, { embed: false, hiddenTime: true, format: 'YYYY-MM-DD' }),

    Picker: build(Picker, { embed: false }),
    PickerPanel: build(Picker, { embed: 'col' }),
    PickerList: build(Picker, { embed: false, multiple: true }),
    PickerListPanel: build(Picker, { embed: 'col', multiple: true }),
  },

  Json: {
    Json: build(Json),
  },

  // Sql: {
  //   SqlField: build(SqlField),
  // },
} as const;
