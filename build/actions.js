"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
exports.addMessage = (message) => store_1.default.dispatch({
    type: 'ADD_MESSAGE',
    message,
});
exports.removeMessage = (id) => store_1.default.dispatch({
    type: 'REMOVE_MESSAGE',
    id,
});
exports.deleteMessage = (id) => store_1.default.dispatch({
    type: 'DELETE_MESSAGE',
    id,
});
