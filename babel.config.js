module.exports = {
  presets: [
  'module:metro-react-native-babel-preset',
  ],
  plugins: [
  ["module-resolver", {
    "alias": {
      "components": "./app/components",
      "containers": "./app/containers",
      "store": "./app/store",
      "config": "./app/config",
      "hooks": "./app/hooks",
      "appearance": "./app/appearance",
      "root":"./app/root",
      "utils":"./app/utils",
    }
  }],

  ],
  };