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