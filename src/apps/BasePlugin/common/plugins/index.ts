import CellText from './Cell/Text/index.vue';
import ControlInput from './Control/Input/index.vue';

export const plugins = {
  Cell: {
    'BasePlugin/Text': CellText,
  },
  Control: {
    'BasePlugin/Input': ControlInput,
  },
};
