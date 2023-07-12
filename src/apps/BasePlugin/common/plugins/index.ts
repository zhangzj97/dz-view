import CellText from './Cell/Text/index.vue';
import ControlInput from './Control/Input/index.vue';
import ControlText from './Control/Text/index.vue';

export const plugins = {
  Cell: {
    'BasePlugin/Text': CellText,
  },
  Control: {
    'BasePlugin/Text': ControlText,
    'BasePlugin/Input': ControlInput,
  },
};
