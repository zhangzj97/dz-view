import AutoSource from './modules/Auto';
import CustomSource from './modules/Custom';
import ScriptSource from './modules/Script';

import { config } from '../../config';

const scopeKey = config.ViewName;

export default {
  ...AutoSource,
  ...ScriptSource,
  ...CustomSource,
};

export { scopeKey };
