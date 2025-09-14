import type { Menu } from "../types/menu.js";
import * as renderer from "../utilities/renderer.js";
/**
 * Enters a menu and locks the program in an update loop until the update returns false.
 */
export const enterMenu = async (menu: Menu) => {
	renderer.newFrame();
	menu.enter();
	while (await menu.update()) {
		// TODO: Add cleanup here so that menus arent responsible of UI clearing.
		renderer.newFrame();
	}
	menu.exit();
};
