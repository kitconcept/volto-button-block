import { defineMessages } from 'react-intl';
import { addStyling } from '@plone/volto/helpers/Extensions/withBlockSchemaEnhancer';

const messages = defineMessages({
  ButtonBlock: {
    id: 'Button Block',
    defaultMessage: 'Button',
  },
  ButtonTitle: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  ButtonLink: {
    id: 'Link',
    defaultMessage: 'Link',
  },
  Align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  innerAlign: {
    id: ' Inner Alignment',
    defaultMessage: 'Inner Alignment',
  },
  openLinkInNewTab: {
    id: 'Open in a new tab',
    defaultMessage: 'Open in a new tab',
  },
  BlockWidth: {
    id: 'Block Width',
    defaultMessage: 'Block Width',
  },
  Alignment: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
});

export const ButtonSchema = (props) => {
  const { intl } = props;
  const schema = {
    title: intl.formatMessage(messages.ButtonBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'href', 'openLinkInNewTab'],
      },
    ],

    properties: {
      title: {
        title: props.intl.formatMessage(messages.ButtonTitle),
      },
      href: {
        title: props.intl.formatMessage(messages.ButtonLink),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: ['Title', 'Description', 'hasPreviewImage'],
        allowExternals: true,
      },
      openLinkInNewTab: {
        title: intl.formatMessage(messages.openLinkInNewTab),
        type: 'boolean',
      },
    },
    required: [],
  };

  addStyling({ schema, intl });

  schema.properties.styles.schema.fieldsets[0].fields = [
    'blockWidth:noprefix',
    ...schema.properties.styles.schema.fieldsets[0].fields,
  ];

  schema.properties.styles.schema.fieldsets[0].fields = [
    'align:noprefix',
    ...schema.properties.styles.schema.fieldsets[0].fields,
  ];

  schema.properties.styles.schema.properties['blockWidth:noprefix'] = {
    widget: 'blockWidth',
    title: intl.formatMessage(messages.BlockWidth),
    default: 'default',
    filterActions: ['narrow', 'default'],
  };

  schema.properties.styles.schema.properties['align:noprefix'] = {
    widget: 'blockAlignment',
    title: intl.formatMessage(messages.Alignment),
    default: 'left',
  };

  return schema;
};
