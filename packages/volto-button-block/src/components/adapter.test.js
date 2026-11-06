import { ButtonBlockDataAdapter } from './adapter';

describe('ButtonBlockDataAdapter', () => {
  it('calls onChangeBlock with the block and the data merged with the new value', () => {
    const onChangeBlock = vi.fn();
    const block = 'block-1';
    const data = {
      '@type': '__button',
      title: 'Read more',
      href: [{ '@id': '/news' }],
    };

    ButtonBlockDataAdapter({
      block,
      data,
      id: 'openLinkInNewTab',
      onChangeBlock,
      value: true,
    });

    expect(onChangeBlock).toHaveBeenCalledTimes(1);
    expect(onChangeBlock).toHaveBeenCalledWith(block, {
      '@type': '__button',
      title: 'Read more',
      href: [{ '@id': '/news' }],
      openLinkInNewTab: true,
    });
  });

  it('replaces the previous value of the changed field', () => {
    const onChangeBlock = vi.fn();

    ButtonBlockDataAdapter({
      block: 'block-1',
      data: { '@type': '__button', title: 'Old' },
      id: 'title',
      onChangeBlock,
      value: 'New',
    });

    expect(onChangeBlock).toHaveBeenCalledWith('block-1', {
      '@type': '__button',
      title: 'New',
    });
  });
});
