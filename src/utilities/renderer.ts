import type { MenuOption } from "../types/menu-option.js";

export const formatOption = ({ key, label }: MenuOption) => `[${key}] ${label}`;

export const listOptions = (options: MenuOption[]) => {
	options.forEach((o) => {
		console.log(formatOption(o));
	});
};

export const newFrame = () => {
	console.clear();
	// TODO: Show UI.
};
