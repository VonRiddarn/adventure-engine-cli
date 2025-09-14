import { getEnforcedInput } from "../managers/input-manager.js";
import type { MenuOption } from "../types/menu-option.js";
import type { Menu } from "../types/menu.js";

const SubMenu = (): Menu => {
	const options: MenuOption[] = [
		{ key: "1", label: "Jar of pickles", action: () => true },
		{ key: "2", label: "Big muscle juice", action: () => true },
		{ key: "3", label: "Green goo", action: () => true },
		{ key: "b", label: "Green goo", action: () => false },
	];

	const enter = () => {
		console.log("WOW! I'm a sub-menu! Maybe I'm like a shop or something!");
		console.log("Yeah, let's go with that.");
	};

	const exit = () => {
		console.log("Please come again!");
		console.log("Or don't... I don't care.");
	};

	const update = async (): Promise<boolean> => {
		let a = await getEnforcedInput("What would you like to buy? : ", options);
		console.log(`Excellent choice! Here is your ${options.filter((o) => o.key == a)[0]?.label}`);
		return false;
	};

	return { enter, update, exit };
};

export default SubMenu;
