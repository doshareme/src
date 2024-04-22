const results = helpers.getLoadersByName(config, 'postcss-loader');
for (const result of results) {
  result.loader.options.plugins = [
    tailwindcss('./tailwind.config.js'),
    // other postcss plugins can be added here
    ...result.loader.options.plugins
  ];
}
