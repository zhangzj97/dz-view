// import AutoSource from './modules/Auto';
// import CustomSource from './modules/Custom';
// import ScriptSource from './modules/Script';
import CustomSource from './modules/Custom';

import { config } from '../../config';

const scopeKey = config.ViewName;

export default {
  // ...AutoSource,
  // ...ScriptSource,
  ...CustomSource,
  // ...DzSource,
};

export { scopeKey };
