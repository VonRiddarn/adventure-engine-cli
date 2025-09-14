import type { Menu } from "../types/menu.js";

export const enterMenu = (menu: Menu) => {
	menu.enter();
	while (menu.update()) {}
};
