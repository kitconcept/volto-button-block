This PR improves accessibility by rendering a semantic `<a>` tag instead of a `<Button>` when the component is linked (data.href). Buttons are meant for actions, while links indicate navigation. Using the correct HTML element helps assistive technologies (like screen readers) interpret the component properly and enhances keyboard navigation and semantics.

In edit mode, the button is still wrapped in a ConditionalLink, as before. In view mode, a plain `<a>` tag is rendered when a link is present, and a `<Button>` is used only if no link exists.

@tomschall