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

export const plugins = {
  Cell: {},
  Control: {
    'BasePlugin/Text': ControlText,
    'BasePlugin/Number': ControlNumber,
    'BasePlugin/Password': ControlPassword,
    'BasePlugin/Date': ControlDate,
    'BasePlugin/Time': ControlTime,
    'BasePlugin/Datetime': ControlDatetime,
    'BasePlugin/Week': ControlWeek,
    'BasePlugin/Month': ControlMonth,
    'BasePlugin/File': ControlFile,
    'BasePlugin/Range': ControlRange,
    'BasePlugin/Color': ControlColor,
    'BasePlugin/Checkbox': ControlCheckbox,
    'BasePlugin/Radio': ControlRadio,
  },
};
