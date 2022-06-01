import { defineMessages } from 'react-intl';
import { pull } from 'lodash';

const messages = defineMessages({
  ButtonBlock: {
    id: 'Button Block',
    defaultMessage: 'Button Block',
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
  layoutContainer: {
    id: '100%',
    defaultMessage: '100%',
  },
  left: {
    id: 'Left',
    defaultMessage: 'Left',
  },
  right: {
    id: 'Right',
    defaultMessage: 'Right',
  },
  center: {
    id: 'Center',
    defaultMessage: 'Center',
  },
  innerAlign: {
    id: ' Inner Alignment',
    defaultMessage: 'Inner Alignment',
  },
});

export const ButtonSchema = (props) => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.ButtonBlock),
    block: 'buttonBlock',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'href', 'align'],
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
      align: {
        title: props.intl.formatMessage(messages.Align),
        choices: [
          ['left', `${intl.formatMessage(messages.left)}`],
          ['right', `${intl.formatMessage(messages.right)}`],
          ['center', `${intl.formatMessage(messages.center)}`],
          ['full', `${intl.formatMessage(messages.layoutContainer)}`],
        ],
        default: 'left',
      },
    },
    required: [],
  };
};

export const ButtonStylingSchema = ({ schema, formData, intl }) => {
  schema.fieldsets[0].fields.push('backgroundColor');
  schema.fieldsets[0].fields.unshift('innerAlign');
  schema.properties.innerAlign = {
    widget: 'align',
    title: intl.formatMessage(messages.innerAlign),
    actions: ['center', 'wide'],
  };
  pull(schema.fieldsets[0].fields, 'align');
  return schema;
};
