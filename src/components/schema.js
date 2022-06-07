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
  innerAlign: {
    id: ' Inner Alignment',
    defaultMessage: 'Inner Alignment',
  },
});

export const ButtonSchema = (props) => {
  const { intl } = props;

  return {
    title: intl.formatMessage(messages.ButtonBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'href', 'inneralign'],
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
      inneralign: {
        title: props.intl.formatMessage(messages.innerAlign),
        widget: 'inner_align',
        default: 'left',
      },
    },
    required: [],
  };
};

export const ButtonStylingSchema = ({ schema, formData, intl }) => {
  schema.fieldsets[0].fields.push('backgroundColor');
  schema.fieldsets[0].fields.unshift('buttonAlign');
  schema.properties.buttonAlign = {
    widget: 'align',
    title: intl.formatMessage(messages.Align),
    actions: ['center', 'wide'],
  };
  pull(schema.fieldsets[0].fields, 'align');
  return schema;
};
