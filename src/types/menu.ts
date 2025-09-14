export type Menu = {
	enter: () => void;
	update: () => Promise<boolean>;
	exit: () => void;
};
