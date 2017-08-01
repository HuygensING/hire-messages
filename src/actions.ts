import {IMessage} from "./messages";
import store from './store';

export const addMessage = (message: IMessage) =>
	store.dispatch({
		type: 'ADD_MESSAGE',
		message,
	});

export const removeMessage = (id: string) =>
	store.dispatch({
		type: 'REMOVE_MESSAGE',
		id,
	});

export const deleteMessage = (id: string) =>
	store.dispatch({
		type: 'DELETE_MESSAGE',
		id,
	});
