export const useLog = ({ module, color }) => {
  const logMap = {
    [module]: 1,
  };

  const trace = (text, module) => {
    console.log(`[Trace] ${text}`, 'background: #222; color: #bada55');
  };

  const debug = (text, module2 = '', debugData: any = false) => {
    const module3 = module2 || module;

    if (!logMap[module3]) {
      logMap[module3] = 1;
    }
    if (debugData) {
      console.warn(
        `%c[Debug]%c[${module3}]%c[Step ${logMap[module3]}] %c${text}`,
        'color: green',
        'color: green',
        '',
        `color: ${color || 'blue'}`
      );
      console.log('   Trace: ', debugData);
    } else {
      console.log(
        `%c[Debug]%c[${module3}]%c[Step ${logMap[module3]}] %c${text}`,
        'color: green',
        'color: green',
        '',
        `color: ${color || 'blue'}`
      );
    }

    logMap[module3] += 1;
  };

  const info = (text, module) => {
    console.log(`[Info ] ${text}`, 'background: #222; color: #bada55');
  };

  const warn = (text, module) => {
    console.log(`[Warn ] ${text}`, 'background: #222; color: #bada55');
  };
  const error = (text, module) => {
    console.log(`[Error] ${text}`, 'background: #222; color: #bada55');
  };

  return {
    trace,
    info,
    debug,
    warn,
    error,
  };
};
