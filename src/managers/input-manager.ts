import readline from "readline/promises";

export const BACK = "b";
export const QUIT = "q";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

type enforceInputOptions = {
	validLength: number;
	allowBack?: boolean;
	allowQuit?: boolean;
};

export const getEnforcedInput = async (
	question: string,
	{ validLength, allowBack = false, allowQuit = false }: enforceInputOptions
): Promise<string> => {
	if (validLength <= 0) throw new Error("validLength must be greater than 0!");
	while (true) {
		const sa = (await rl.question(question)).toLowerCase().trim();
		let na = Number.parseInt(sa);

		if (Number.isNaN(na)) {
			if ((sa === BACK.toLowerCase() && allowBack) || (sa === QUIT.toLowerCase() && allowQuit))
				return sa;
			else {
				console.log(`Answer must be a number between 1 and ${validLength}!`);
				continue;
			}
		}

		if (na < 1 || na > validLength) {
			console.log(`Answer must be a number between 1 and ${validLength}!`);
			continue;
		}

		return sa;
	}
};
