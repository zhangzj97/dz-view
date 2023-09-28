import Hidden from '@/components/Control/Input/Hidden/index.vue';
import Text from '@/components/Control/Input/Text/index.vue';
import Textarea from '@/components/Control/Input/Textarea/index.vue';
import String from '@/components/Control/Input/String/index.vue';
import Number from '@/components/Control/Input/Number/index.vue';
import Password from '@/components/Control/Input/Password/index.vue';

import Date from '@/components/Control/Date/index.vue';
import Time from '@/components/Control/Time/index.vue';
import Datetime from '@/components/Control/Datetime/index.vue';
import Week from '@/components/Control/Week/index.vue';
import Month from '@/components/Control/Month/index.vue';
import File from '@/components/Control/File/index.vue';
import Range from '@/components/Control/Range/index.vue';
import Color from '@/components/Control/Color/index.vue';
import Checkbox from '@/components/Control/Checkbox/index.vue';
import Radio from '@/components/Control/Radio/index.vue';
import Select from '@/components/Control/Select/index.vue';
import SelectMul from '@/components/Control/SelectMul/index.vue';

import SqlField from '@/components/Control/SqlField/index.vue';
import Json from '@/components/Control/Json/index.vue';

const build = component => option => {
  option.component = () => component;
  return option;
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
    Checkbox: build(Checkbox),
    Radio: build(Radio),
    Select: build(Select),
    SelectMul: build(SelectMul),

    SqlField: build(SqlField),
    Json: build(Json),
  },
} as const;
