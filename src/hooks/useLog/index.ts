export const useLog = ({ module, color }) => {
  const logMap = {
    [module]: 1,
  };

  const trace = (text, module) => {
    console.log(`[Trace] ${text}`, 'background: #222; color: #bada55');
  };

  const debug = (text, module2 = false) => {
    const module3 = module2 || module;
    console.log(
      `%c[Debug]%c[${module}]%c[Step ${logMap[module3]}] %c${text}`,
      'color: green',
      'color: green',
      '',
      `color: ${color || 'blue'}`
    );
    logMap[module] += 1;
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
    debug,
    warn,
    error,
  };
};
