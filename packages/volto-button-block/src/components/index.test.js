import { createIntl } from 'react-intl';
import blockConfig from './index';
import { ButtonBlockDataAdapter } from './adapter';

const intl = createIntl({ locale: 'en', messages: {} });

describe('Button block configuration', () => {
  it('registers the block with the __button id', () => {
    expect(blockConfig.id).toBe('__button');
  });

  it('registers a blockSchema that resolves with only intl', () => {
    const schema = blockConfig.blockSchema({ intl });

    expect(schema.title).toBe('Button');
    expect(schema.properties.href).toBeDefined();
  });

  it('registers the data adapter of the settings form', () => {
    expect(blockConfig.dataAdapter).toBe(ButtonBlockDataAdapter);
  });
});
