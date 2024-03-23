import React from 'react';
import { Button } from 'semantic-ui-react';
import cx from 'classnames';
import { ConditionalLink, MaybeWrap } from '@plone/volto/components';
import { defineMessages, useIntl } from 'react-intl';
import config from '@plone/volto/registry';

const messages = defineMessages({
  ButtonText: {
    id: 'Button text',
    defaultMessage: 'Button text',
  },
});

const LegacyWrapper = (props) => (
  <div className={cx('block __button', props.className)}>
    <div className="button container">{props.children}</div>
  </div>
);

const View = ({ data, isEditMode, className, blocksConfig }) => {
  const [hasLink, setHasLink] = React.useState(false);
  const intl = useIntl();
  const isBlockModelv3 = blocksConfig?.__button?.v3;

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

  let link = hasLink ? (
    data.href.length > 0 && (
      <ConditionalLink
        to={data.href[0]?.['@id']}
        condition={!isEditMode}
        openLinkInNewTab={data.openLinkInNewTab}
      >
        <Button className={(cx('button'), data.align)}>
          {data.title || intl.formatMessage(messages.ButtonText)}
        </Button>
      </ConditionalLink>
    )
  ) : (
    <Button className="noLink">
      {data.title || intl.formatMessage(messages.ButtonText)}
    </Button>
  );

  return (
    <MaybeWrap condition={!isBlockModelv3} as={LegacyWrapper}>
      <div className={cx(`align ${data?.inneralign}`)}>{link}</div>
    </MaybeWrap>
  );
};

export default View;
