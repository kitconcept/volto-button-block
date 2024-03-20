module.exports = {
  extends: './core/packages/volto/.eslintrc',
  rules: {
    'import/no-unresolved': 1,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@plone/volto', './core/packages/volto/src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
