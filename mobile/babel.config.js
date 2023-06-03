// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/env': './src/env',
            '@/modules': './src/modules',
          },
        },
      ],
    ],
  };
};
