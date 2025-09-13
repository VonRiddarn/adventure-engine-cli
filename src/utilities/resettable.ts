type Resettable<T> = {
	value: T;
	default: T;
	consume: () => T;
};

// Uses closures to hide internal state (value and def)
// Mimics the OOP way of doing things
export const createResettable = <T>(initial: T): Resettable<T> => {
	let value = initial;
	const def = initial;

	return {
		get value() {
			return value;
		},
		set value(v: T) {
			value = v;
		},
		get default() {
			return def;
		},
		consume: () => {
			const current = value;
			value = def;
			return current;
		},
	};
};

/* 
	The pure functional / utility way would be:

	createResettable(initialValue) -- return a resettable {value, default}
	consumeResettable(resettable) -- return resettable.value and set resettable.value to resettable.default.
*/
