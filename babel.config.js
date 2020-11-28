module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.json',
        ],
        alias: {
          "_assets": "./src/assets",
          "_components": "./src/components",
          "_atoms": "./src/components/atoms",
          "_molecules": "./src/components/molecules",
          "_organisms": "./src/components/organisms",
          "_navigations": "./src/navigations",
          "_scenes": "./src/scenes",
          "_services": "./src/services",
          "_styles": "./src/styles",
          "_utils": "./src/utils",
          "_reducers" : './src/redux_/reducers',
          "_actions" : './src/redux_/actions',
          "_redux" : "./src/redux_"
        },
      },
    ]
  ]
};
