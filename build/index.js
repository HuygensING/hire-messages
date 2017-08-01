"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const store_1 = require("./store");
const components_1 = require("./components");
var actions_1 = require("./actions");
exports.addMessage = actions_1.addMessage;
const messageByType = {
    error: components_1.ErrorMessage,
    success: components_1.SuccessMessage,
    warning: components_1.WarningMessage,
};
class HireMessagesComp extends React.Component {
    render() {
        return (React.createElement(components_1.Messages, null, this.props.messages.map((m, i) => {
            const Comp = messageByType[m.type];
            return (React.createElement(Comp, { index: i, key: i, remove: m.remove }, m.value));
        })));
    }
}
const HireMessages = react_redux_1.connect(state => ({
    messages: state
}), null)(HireMessagesComp);
exports.default = (React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(HireMessages, null)));
