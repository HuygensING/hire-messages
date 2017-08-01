"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const messages_1 = require("./messages");
const store = redux_1.createStore(messages_1.default);
exports.default = store;
