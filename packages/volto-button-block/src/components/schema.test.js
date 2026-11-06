import { createIntl } from 'react-intl';
import { ButtonSchema } from './schema';

const intl = createIntl({ locale: 'en', messages: {} });

describe('ButtonSchema', () => {
  it('resolves with only intl, as the @blocks-schema endpoint calls it', () => {
    const schema = ButtonSchema({ intl });

    expect(schema.title).toBe('Button');
    expect(Object.keys(schema.properties)).toEqual(
      expect.arrayContaining(['title', 'href', 'openLinkInNewTab', 'styles']),
    );
  });

  it('puts the styling fields in the styles schema', () => {
    const schema = ButtonSchema({ intl });
    const stylesFields = schema.properties.styles.schema.fieldsets[0].fields;

    expect(stylesFields).toEqual(
      expect.arrayContaining(['align:noprefix', 'blockWidth:noprefix']),
    );
  });
});
