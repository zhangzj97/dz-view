import Hidden from '@/components/Control/Input/Hidden/index.vue';
import Text from '@/components/Control/Input/Text/index.vue';
import Textarea from '@/components/Control/Input/Textarea/index.vue';
import String from '@/components/Control/Input/String/index.vue';
import Number from '@/components/Control/Input/Number/index.vue';
import Password from '@/components/Control/Input/Password/index.vue';

import Date from '@/components/Control/TimePicker/Date/index.vue';
import Time from '@/components/Control/TimePicker/Time/index.vue';
import Datetime from '@/components/Control/TimePicker/Datetime/index.vue';
import Week from '@/components/Control/TimePicker/Week/index.vue';
import Month from '@/components/Control/TimePicker/Month/index.vue';

import Picker from '@/components/Control/Picker/Picker/index.vue';
import PickerList from '@/components/Control/Picker/PickerList/index.vue';
import PopPicker from '@/components/Control/Picker/PopPicker/index.vue';
import PopPickerList from '@/components/Control/Picker/PopPickerList/index.vue';

import File from '@/components/Control/File/index.vue';
import Range from '@/components/Control/Range/index.vue';
import Color from '@/components/Control/Color/index.vue';
// import Checkbox from '@/components/Control/Checkbox/index.vue';
// import Radio from '@/components/Control/Radio/index.vue';
// import SelectMul from '@/components/Control/SelectMul/index.vue';

// import SqlField from '@/components/Control/SqlField/index.vue';
import Json from '@/components/Control/Other/Json/index.vue';

const build = component => payload => {
  return { ...payload, component: () => component };
};

export const Control = {
  Base: {
    Hidden: build(Hidden),
    Text: build(Text),
    Textarea: build(Textarea),
    String: build(String),
    Number: build(Number),
    Password: build(Password),
    Date: build(Date),
    Time: build(Time),
    Datetime: build(Datetime),
    Week: build(Week),
    Month: build(Month),
    File: build(File),
    Range: build(Range),
    Color: build(Color),
    Picker: build(Picker),
    PickerList: build(PickerList),
    PopPicker: build(PopPicker),
    PopPickerList: build(PopPickerList),
  },

  Json: {
    Json: build(Json),
  },

  // Sql: {
  //   SqlField: build(SqlField),
  // },
} as const;
