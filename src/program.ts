import { closeInputManager, getEnforcedInput } from "./managers/input-manager.js";
import MainMenu from "./menus/main-menu.js";
import { enterMenu } from "./utilities/menu-utilities.js";

console.log("Hello world");

const startGame = async () => {
	await enterMenu(MainMenu());

	console.log("Bye.");
};

await startGame();

closeInputManager();
process.exit(0);
