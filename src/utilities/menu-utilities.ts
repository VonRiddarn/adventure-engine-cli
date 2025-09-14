import type { Menu } from "../types/menu.js";

export const enterMenu = async (menu: Menu) => {
	menu.enter();
	while (await menu.update()) {}
};
