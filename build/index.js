"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const components_1 = require("./components");
const actions_1 = require("./actions");
var actions_2 = require("./actions");
exports.addMessage = actions_2.addMessage;
const messageByType = {
    error: components_1.ErrorMessage,
    success: components_1.SuccessMessage,
    warning: components_1.WarningMessage,
};
const HireMessagesComp = (props) => React.createElement(components_1.Messages, null, props.messages.map((m, i) => {
    const Message = messageByType[m.type];
    return (React.createElement(Message, { index: i, key: i, onClick: () => actions_1.removeMessage(m.id), remove: m.remove }, m.value));
}));
const HireMessages = react_redux_1.connect(state => ({
    messages: state
}), null)(HireMessagesComp);
exports.default = (React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(HireMessages, null)));
