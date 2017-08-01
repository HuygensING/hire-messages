"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const actions_1 = require("./actions");
const messages = (state = [], action) => {
    let nextState = state;
    switch (action.type) {
        case 'ADD_MESSAGE': {
            const { value, type } = action.message;
            const id = `id-${Math.floor(Math.random() * 10000)}`;
            nextState = nextState.concat({ value, type, id, remove: false });
            const index = nextState.length - 1;
            setTimeout(() => {
                store_1.default.dispatch(actions_1.removeMessage(id));
            }, 3000);
            break;
        }
        case 'REMOVE_MESSAGE': {
            nextState = nextState
                .map(m => {
                if (m.id === action.id) {
                    m.remove = true;
                    setTimeout(() => {
                        store_1.default.dispatch(actions_1.deleteMessage(m.id));
                    }, 1000);
                }
                return m;
            });
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
exports.default = messages;
