import Edit from './Edit';
import View from './View';
import circleMenuSVG from '@plone/volto/icons/circle-menu.svg';
import { ButtonSchema } from './schema';
import type { BlockConfigBase } from '@plone/types';

const blockConfig: BlockConfigBase = {
  id: '__button',
  title: 'Button',
  icon: circleMenuSVG,
  group: 'common',
  view: View,
  edit: Edit,
  restricted: false,
  mostUsed: true,
  sidebarTab: 1,
  category: 'action',
  blockSchema: ButtonSchema,
};

export default blockConfig;
