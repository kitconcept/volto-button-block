import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Button } from '@plone/components';
import cx from 'classnames';
import ConditionalLink from '@plone/volto/components/manage/ConditionalLink/ConditionalLink';
import { BlockWrapper } from '@kitconcept/volto-bm3-compat';

const messages = defineMessages({
  ButtonText: {
    id: 'Button text',
    defaultMessage: 'Button text',
  },
});

const LegacyWrapper = (props) => (
  <div className="button container">
    <div className={cx('align', props.data?.inneralign)}>{props.children}</div>
  </div>
);

const View = (props) => {
  const { data, isEditMode } = props;
  const [hasLink, setHasLink] = React.useState(false);
  const intl = useIntl();

  React.useEffect(() => {
    if (data.href) {
      if (data.href && data.href.length > 0) {
        setHasLink(true);
      }
      if (data.href.length === 0) {
        setHasLink(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.href]);

  let link;
  if (hasLink && data.href.length > 0) {
    if (isEditMode) {
      link = (
        <ConditionalLink
          to={data.href[0]?.['@id']}
          condition={!isEditMode}
          openLinkInNewTab={data.openLinkInNewTab}
          item={data.href[0]}
        >
          <Button className={(cx('button'), data.align)}>
            {data.title || intl.formatMessage(messages.ButtonText)}
          </Button>
        </ConditionalLink>
      );
    } else {
      // Accessibility: Render as <a> tag in view mode when link exists
      link = (
        <a href={data.href[0]?.['@id']} className={cx('button', data.align)}>
          {data.title || intl.formatMessage(messages.ButtonText)}
        </a>
      );
    }
  } else {
    link = (
      <Button className="noLink">
        {data.title || intl.formatMessage(messages.ButtonText)}
      </Button>
    );
  }

  return (
    <BlockWrapper {...props} ExtraWrapper={LegacyWrapper}>
      {link}
    </BlockWrapper>
  );
};

export default View;
