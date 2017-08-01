# Hire Messages

## Example usage
```javascript
import Messages, { addMessage } from 'hire-messages';
```

Call `addMessage` to add a message. It's true.
```javascript
addMessage({
  type: 'error',
  value: 'This is a error',
});
```

The component is already initialized, just add `Messages`
to another React component
```html
<MyApp>
  <Header>My App header</Header>
  <Body>My App body</Body>
  {Messages}
</MyApp>
```

## Development
```
$ npm run watch
```
