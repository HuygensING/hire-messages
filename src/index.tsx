import * as React from "react";
import {connect, Provider} from 'react-redux';
import store from './store';
import {ErrorMessage, Messages, SuccessMessage, WarningMessage} from "./components";
export { addMessage } from './actions';

const messageByType = {
	error: ErrorMessage,
	success: SuccessMessage,
	warning: WarningMessage,
};

class HireMessagesComp extends React.Component<any, any> {
	public render() {
		return (
			<Messages>
				{
					this.props.messages.map((m, i) => {
						const Comp = messageByType[m.type];
						return (
							<Comp
								index={i}
								key={i}
								remove={m.remove}
							>
								{m.value}
							</Comp>
						);	
					})
				}
			</Messages>
		);
	}
}

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