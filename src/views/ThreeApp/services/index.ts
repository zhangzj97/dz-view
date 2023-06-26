// import AutoSource from './modules/Auto';
// import CustomSource from './modules/Custom';
// import ScriptSource from './modules/Script';
import DemoSource from './modules/Demo';
import AuthSource from './modules/auth-service';

import { config } from '../config';

const scopeKey = config.ViewName;

export default {
  // ...AutoSource,
  // ...ScriptSource,
  // ...CustomSource,
  ...DemoSource,
  ...AuthSource,
};

export { scopeKey };
