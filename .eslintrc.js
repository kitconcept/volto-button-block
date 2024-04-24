const fs = require('fs');
const projectRootPath = __dirname;

const eslintPath = 'core/packages/volto/.eslintrc';

let eslintCoreVoltoConfigFile;
if (fs.existsSync(`${projectRootPath}/${eslintPath}`))
  eslintCoreVoltoConfigFile = `${projectRootPath}/${eslintPath}`;
else if (fs.existsSync(`${projectRootPath}/../../${eslintPath}`))
  eslintCoreVoltoConfigFile = `${projectRootPath}/../../${eslintPath}`;

module.exports = {
  extends: eslintCoreVoltoConfigFile,
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
