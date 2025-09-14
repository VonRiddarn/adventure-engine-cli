import readline from "readline/promises";
import type { MenuOption } from "../types/menu-option.js";

export const BACK = "b";
export const QUIT = "q";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export const closeInputManager = () => rl.close();

export const getEnforcedInput = async (question: string, options: MenuOption[]): Promise<string> => {
	if (options.length <= 0) throw new Error("Options cannot be empty!");

	const optionsNormalized = options.map((o) => o.key.toLowerCase().trim());
	let tries = 0;

	while (true) {
		const answer = (await rl.question(question)).toLowerCase().trim();

		if (!optionsNormalized.includes(answer)) {
			tries++;
			console.log(`Invalid input.`);

			if (tries % 3 == 0) console.log(`Allowed inputs: ${optionsNormalized}`);
			continue;
		}

		return answer;
	}
};

export const pressEnterToContinue = async () => {
	await rl.question("Press ENTER to continue...");
};
