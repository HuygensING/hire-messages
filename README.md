# Hire Messages

## Example usage
```
import Messages, { addMessage } from 'hire-messages';

// Call `addMessage` to add a message. It's true.
addMessage({
	type: 'error',
	value: 'This is a error',
});

// The component is already initialized, just add the var
// another React component
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
