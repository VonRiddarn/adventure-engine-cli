import { closeInputManager, getEnforcedInput } from "../managers/input-manager.js";
import type { MenuOption } from "../types/menu-option.js";
import type { Menu } from "../types/menu.js";
import { enterMenu } from "../utilities/menu-utilities.js";
import SubMenu from "./SubMenu.js";

const MainMenu = (): Menu => {
	const options: MenuOption[] = [
		{ key: "1", label: "New game", action: () => true },
		{
			key: "2",
			label: "Load game",
			action: async () => {
				await enterMenu(SubMenu());
				return true;
			},
		},
		{
			key: "q",
			label: "Exit",
			action: () => false,
		},
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

		const chosen = options.find((o) => o.key === a);
		if (chosen) {
			return await chosen.action();
		}
		return true;
	};

	return { enter, update, exit };
};

export default MainMenu;
