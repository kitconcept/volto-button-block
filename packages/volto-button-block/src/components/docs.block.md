---
block: __button
---

Shows a button that links to a content item or to an external URL. The button text is the block's `title`. Without `href`, the button is shown without a link.

### Fields

- `title`: the text of the button. When it is empty, the button shows the default text of the block.
- `href`: a list with one item, `[{ "@id": path or URL, "title": title }]`. Use a path for content from the site, or a full URL for an external link. Leave the list empty for a button without a link.
- `openLinkInNewTab`: `true` to open the link in a new browser tab, `false` or omitted to open it in the same tab.
- `styles.align`: the alignment of the button, such as `left`, `center` or `right`. Defaults to `left` when omitted.
- `styles.blockWidth`: the width of the block, such as `default` or `narrow`. Defaults to `default` when omitted.

### Example

```json
{
  "@type": "__button",
  "title": "Read the annual report",
  "href": [
    { "@id": "/news/annual-report", "title": "Annual Report" }
  ],
  "openLinkInNewTab": false,
  "styles": {
    "align": "center",
    "blockWidth": "default"
  }
}
```
