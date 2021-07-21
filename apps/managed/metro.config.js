const { getDefaultConfig } = require("@expo/metro-config");
const { mergeConfig } = require("metro-config");
const path = require("path");
const defaultConfig = getDefaultConfig(__dirname);

const extraNodeModules = {
  "@acme/ui": path.resolve(__dirname, "../../packages/ui"),
};

const watchFolders = [path.resolve(__dirname, "../../packages/ui")];

const yarnConfig = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
    enableBabelRCLookup: false,
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from common/ to local node_modules
        name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
};

const finalConfig = mergeConfig(defaultConfig, yarnConfig);

module.exports = finalConfig;
