import { defineMessages } from 'react-intl';

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
