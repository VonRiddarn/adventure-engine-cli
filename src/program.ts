import { closeInputManager } from "./managers/input-manager.js";
import MainMenu from "./menus/MainMenu.js";
import { enterMenu } from "./utilities/menu-utilities.js";

console.log("Hello world");

const startGame = async () => {
	await enterMenu(MainMenu());

	console.log("Bye.");
};

await startGame();

closeInputManager();
process.exit(0);
