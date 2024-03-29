const fs = require('fs');

console.log(__dirname);

const srcPath = __dirname.replace('\\scripts\\dz-resources', '\\src');
const targetPath = `${srcPath}\\resources`;

const appsPath = `${srcPath}\\apps`;

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(dirPath + '/' + file);
    }
  });

  return arrayOfFiles;
};

const getAppMap = () => {
  const getPluginMap = ({ path, scope }) => {
    try {
      fs.lstatSync(path);
      console.log(`[Info ] ${scope} 存在 plugins`);
    } catch (e) {
      console.log(`[Info ] ${scope} 不存在 plugins`);
      return {};
    }

    const fileList = getAllFiles(path, []).filter(item => {
      if (!item.match(/index.vue$/)) return false;
      if (item.match(/components/)) return false;
      return true;
    });

    const module = {};
    fileList.forEach(item => {
      const key =
        scope +
        '/' +
        item
          .replace(/__.*?__/g, '')
          .replace(/^.*modules\/\//, '')
          .replace(/\/index.vue$/, '');

      module[key] = {
        path: item
          .replace(/^.*?src/, '@')
          .replace(/\\/g, '/')
          .replace(/\/index.vue$/g, ''),
      };
    });

    return module;
  };

  const getPageMap = ({ path, scope }) => {
    try {
      fs.lstatSync(path);
      console.log(`[Info ] ${scope} 存在 pages`);
    } catch (e) {
      console.log(`[Info ] ${scope} 不存在 pages`);
      return {};
    }

    const fileList = getAllFiles(path, []).filter(item => {
      if (!item.match(/index.vue$/)) return false;
      if (item.match(/components/)) return false;
      return true;
    });

    const module = {};
    fileList.forEach(item => {
      const key =
        scope +
        '/' +
        item
          .replace(/__.*?__/g, '')
          .replace(/^.*pages\//, '')
          .replace(/\/index.vue$/g, '');

      module[key] = {
        path: item
          .replace(/^.*?apps/, '')
          .replace(/\\/g, '/')
          .replace(/\/index.vue$/g, ''),
      };
    });
    return module;
  };

  const pageMapToRoute = ({ pageMap, scope }) => {
    return {
      name: scope,
      path: '/' + scope,
      component: `${scope}`,
      children: Object.entries(pageMap).map(([key, item]) => ({
        name: key,
        path: key.replace(scope, '').replace(/\/\//g, '/'),
        component: item.path,
      })),
    };
  };

  const apps = fs.readdirSync(appsPath);

  const appMap = {
    BaseLayout: { type: '通用' },
    BasePlugin: { type: '通用' },
    BaseLocale: { type: '通用' },
  };
  apps.forEach(app => {
    if (!appMap[app]) {
      appMap[app] = { type: '业务' };
    }
    appMap[app].scope = app;
    appMap[app].pluginMap = getPluginMap({
      path: `${srcPath}\\apps\\${app}\\common\\plugins`,
      scope: app,
    });
    appMap[app].pageMap = getPageMap({
      path: `${srcPath}\\apps\\${app}\\pages`,
      scope: app,
    });

    appMap[app].route = pageMapToRoute({
      pageMap: appMap[app].pageMap,
      scope: app,
    });
  });

  return appMap;
};

const appMap = getAppMap();

fs.writeFileSync(`${targetPath}/apps.json`, JSON.stringify(appMap));

const routes = Object.entries(appMap).map(([key, item]) => {
  return item.route;
});

fs.writeFileSync(`${targetPath}/routes/data.json`, JSON.stringify(routes));

// copy 指定的路由守卫
const MAIN_APP = 'AdminApp';
const guardIndexTs = fs.readFileSync(
  `${srcPath}/resources/guards/index.ts.tpl`,
  { encoding: 'utf8', flag: 'r' }
);
console.log(guardIndexTs);
fs.writeFileSync(
  `${srcPath}/resources/guards/index.ts`,
  guardIndexTs.replace(/__MAIN_APP__/, MAIN_APP)
);
