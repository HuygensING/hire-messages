import store from './store';
import {removeMessage, deleteMessage} from "./actions";

export interface IMessage {
	id?: string;
	remove?: boolean;
	type: 'error' | 'warning' | 'success' | 'info';
	value: string;
}

const messages = (state: IMessage[] = [], action) => {
	let nextState = state;

	switch (action.type) {
		case 'ADD_MESSAGE': {
			const { value, type } = action.message;
			const id = `id-${Math.floor(Math.random()*10000)}`;
			nextState = nextState.concat({ value, type, id, remove: false });
			const index = nextState.length - 1;
			setTimeout(
				() => {
					store.dispatch(removeMessage(id));
				},
				3000
			);
			break;
		}

		case 'REMOVE_MESSAGE': {
			nextState = nextState
				.map(m => {
					if (m.id === action.id)	{
						m.remove = true;

						setTimeout(
							() => {
								store.dispatch(deleteMessage(m.id));
							},
							1000
						);
					}

					return m;
				})

			break;
		}

		case 'DELETE_MESSAGE': {
			nextState = nextState.filter(m => !m.remove);

			break;
		}

		default:
			break;
	}

	return nextState;
};

export default messages;
