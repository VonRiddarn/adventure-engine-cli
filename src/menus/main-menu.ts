import { getEnforcedInput } from "../managers/input-manager.js";
import type { MenuOption } from "../types/menu-option.js";
import type { Menu } from "../types/menu.js";

const MainMenu = (): Menu => {
	const options: MenuOption[] = [
		{ key: "1", label: "Option 1", action: () => {} },
		{ key: "2", label: "Option 2", action: () => {} },
		{ key: "3", label: "Option 3", action: () => {} },
		{ key: "4", label: "Option 3", action: () => {} },
	];

	const enter = () => {
		console.log("Oh, guess I'm in!");
	};

	const update = async (): Promise<boolean> => {
		let a = await getEnforcedInput("Choose an option: ", options);
		console.log(a);
		console.log("I'm done, bye bro!");
		return false;
	};

	return { enter, update };
};

export default MainMenu;
