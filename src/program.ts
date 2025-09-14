import { getEnforcedInput } from "./managers/input-manager.js";
import MainMenu from "./menus/main-menu.js";
import { enterMenu } from "./utilities/menu-utilities.js";

console.log("Hello world");

const startGame = async () => {
	enterMenu(MainMenu());

	console.log("Bye.");
};

startGame();
