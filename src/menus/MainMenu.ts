import { getEnforcedInput } from "../managers/input-manager.js";
import type { MenuOption } from "../types/menu-option.js";
import type { Menu } from "../types/menu.js";
import { enterMenu } from "../utilities/menu-utilities.js";
import SubMenu from "./SubMenu.js";

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

	const exit = () => {
		console.log("Aight, Imma head.");
	};

	const update = async (): Promise<boolean> => {
		let a = await getEnforcedInput("Choose an option: ", options);
		console.log(`Well done, bro. You chose: ${a}`);
		if (a === "1") await enterMenu(SubMenu());
		return false;
	};

	return { enter, update, exit };
};

export default MainMenu;
