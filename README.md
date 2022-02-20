# ARMDE
Awesome React Markdown Editor

# Usage

To run the example app, run:
```
$ cd example
$ npm start
```

## 1. Using ArmdeWrapper
```jsx
import { ArmdeWrapper } from 'armde';

function App() {
  return <ArmdeWrapper />;
}
```

## 2. Using ArmdeWrapper with no style
```jsx
import { ArmdeWrapper } from 'armde';

function App() {
  return <ArmdeWrapper noStyle />;
}
```

## 3. Using ArmdeEditor and ArmdeViewer
```jsx
import { ArmdeEditor, ArmdeViewer, ArmdeConnection } from 'armde';

function App() {
  const connection = new ArmdeConnection();
  return (
    <>
      <ArmdeEditor connection={connection} />
      <ArmdeViewer connection={connection} />
    </>
  );
}
```

## 4. Using ArmdeEditor and ArmdeViewer with no style
```jsx
import { ArmdeEditor, ArmdeViewer, ArmdeConnection } from 'armde';

function App() {
  const connection = new ArmdeConnection();
  return (
    <>
      <ArmdeEditor connection={connection} noStyle />
      <ArmdeViewer connection={connection} noStyle />
    </>
  );
}
```
