# semantic-ui-react-context-menu

Component for [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React)

## Installation

```
npm install --save semantic-ui-react-context-menu
```

## Usage

```js
import ContextMenu from 'semantic-ui-react-context-menu';

const MyComponent = () => (
  <ContextMenu
    trigger={<div />}
    items={[{ content: 'Remove' }]}
    onClick={(_, item) => {
      console.log(item); // { content: 'Remove' }
    }}
  />
);
```

> The trigger must expose onContextMenu prop

## Rules
    A ContextMenu set in a child element to popup instead an eventual ContextMenu set in parent.
    the ContextMenu position is updataed at each right click.
    The ContextMenu is removed when a click is done out of this ContextMenu.
    the ContextMenu is not triggered when "ctrl" is hold
