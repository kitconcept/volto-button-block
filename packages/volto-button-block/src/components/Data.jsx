import React from 'react';
import { ButtonSchema } from './schema';
import { BlockDataForm } from '@plone/volto/components';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  ButtonBlock: {
    id: 'Button Block',
    defaultMessage: 'Button',
  },
});

const ButtonData = (props) => {
  const {
    block,
    blocksConfig,
    data,
    schemaEnhancer,
    onChangeBlock,
    navRoot,
    contentType,
  } = props;
  const intl = useIntl();
  const schema = schemaEnhancer
    ? schemaEnhancer(ButtonSchema({ ...props, intl }), props)
    : ButtonSchema({ ...props, intl });

  return (
    <BlockDataForm
      schema={schema}
      title={intl.formatMessage(messages.ButtonBlock)}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      onChangeBlock={onChangeBlock}
      formData={data}
      block={block}
      blocksConfig={blocksConfig}
      navRoot={navRoot}
      contentType={contentType}
    />
  );
};

export default ButtonData;
