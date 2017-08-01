import * as React from "react";
import {connect, Provider} from 'react-redux';
import store from './store';
import {ErrorMessage, Messages, SuccessMessage, WarningMessage} from "./components";
import { removeMessage } from "./actions";
export { addMessage } from './actions';

const messageByType = {
	error: ErrorMessage,
	success: SuccessMessage,
	warning: WarningMessage,
};

const HireMessagesComp = (props) =>
	<Messages>
		{
			props.messages.map((m, i) => {
				const Message = messageByType[m.type];
				return (
					<Message
						index={i}
						key={i}
						onClick={() => removeMessage(m.id)}
						remove={m.remove}
					>
						{m.value}
					</Message>
				);
			})
		}
	</Messages>;

const HireMessages = connect(
	state => ({
		messages: state
	}),
	null
)(HireMessagesComp);

export default (
	<Provider store={store}>
		<HireMessages />
	</Provider>
);