import type { ConfigType } from '@plone/registry';
import type { BlockConfigBase } from '@plone/types';
import blockConfig from './components';

import './theme/button-base.css';

declare module '@plone/types' {
  export interface BlocksConfigData {
    __button: BlockConfigBase;
  }
}

const applyConfig = (config: ConfigType) => {
  config.blocks.blocksConfig.__button = blockConfig;
  return config;
};

export default applyConfig;
