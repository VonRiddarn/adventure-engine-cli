import { getEnforcedInput } from "./managers/input-manager.js";

console.log("Hello world");

let isRunning: boolean = true;

const startGame = async () => {
	while (isRunning) {
		console.log("Entered menu.");
		const a = await getEnforcedInput("What would you like to do?", { validLength: 1 });
		console.log("Got valid input.");
		if (a === "1") isRunning = false;
	}

	console.log("Bye.");
};

await startGame();
