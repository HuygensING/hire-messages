"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.Messages = styled_components_1.default.ul `
	bottom: 0;
	position: absolute;
	left: 1em;
`;
exports.Message = styled_components_1.default.li `
	border-radius: 3px;
	bottom: ${(props) => (props.index * 4) + 1}em;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
	opacity: ${(props) => props.remove ? 0 : 1};
	padding: 1em 4em 1em 1em;
	position: absolute;
	transition: all 1s;
	width: 10em;
	
	&:after {
		background-color: white;
		border-radius: 1em;
		color: red;
		content: '✖';
		cursor: pointer;
		display: inline-block;
		font-size: 1.3em;
		line-height: 1.3em;
		position: absolute;
		right: 0.5em;
		text-align: center;
		top: 0.6em;
		width: 1.3em;
	}	
`;
exports.ErrorMessage = exports.Message.extend `
	background-color: red;
	color: white;
	&:after {
		color: red;
	}	
`;
exports.WarningMessage = exports.Message.extend `
	background-color: orange;
	color: white;
	&:after {
		color: orange;
	}	
`;
exports.SuccessMessage = exports.Message.extend `
	background-color: green;
	color: white;
	&:after {
		color: green;
	}	
`;
exports.default = null;
