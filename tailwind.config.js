export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  corePlugins: {
    scrollBehavior: true,
  },
}
