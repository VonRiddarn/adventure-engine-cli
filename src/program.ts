import { getEnforcedInput } from "./managers/input-manager.js";

console.log("Hello world");

let isRunning: boolean = true;

const startGame = async () => {
	while (isRunning) {
		console.log("Entered menu.");
		const a = await getEnforcedInput("What would you like to do?", [
			{ key: "1", label: "Option 1", action: () => {} },
			{ key: "2", label: "Option 2", action: () => {} },
			{ key: "3", label: "Option 3", action: () => {} },
			{ key: "4", label: "Option 3", action: () => {} },
		]);

		console.log("Got valid input.");
		if (a === "4") isRunning = false;
	}

	console.log("Bye.");
};

await startGame();
