import ControlText from './Control/Text/index.vue';
import ControlNumber from './Control/Number/index.vue';
import ControlPassword from './Control/Password/index.vue';
import ControlDate from './Control/Date/index.vue';
import ControlTime from './Control/Time/index.vue';
import ControlDatetime from './Control/Datetime/index.vue';
import ControlWeek from './Control/Week/index.vue';
import ControlMonth from './Control/Month/index.vue';
import ControlFile from './Control/File/index.vue';
import ControlRange from './Control/Range/index.vue';
import ControlColor from './Control/Color/index.vue';
import ControlCheckbox from './Control/Checkbox/index.vue';
import ControlRadio from './Control/Radio/index.vue';
import ControlSelect from './Control/Select/index.vue';
import ControlSelectMul from './Control/SelectMul/index.vue';

export const plugins = {
  Cell: {},
  Control: {
    'PluginRaw/Text': ControlText,
    'PluginRaw/Number': ControlNumber,
    'PluginRaw/Password': ControlPassword,
    'PluginRaw/Date': ControlDate,
    'PluginRaw/Time': ControlTime,
    'PluginRaw/Datetime': ControlDatetime,
    'PluginRaw/Week': ControlWeek,
    'PluginRaw/Month': ControlMonth,
    'PluginRaw/File': ControlFile,
    'PluginRaw/Range': ControlRange,
    'PluginRaw/Color': ControlColor,
    'PluginRaw/Checkbox': ControlCheckbox,
    'PluginRaw/Radio': ControlRadio,
    'PluginRaw/Select': ControlSelect,
    'PluginRaw/SelectMul': ControlSelectMul,
  },
};
