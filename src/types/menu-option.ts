export type MenuOption = {
	key: string;
	label: string;
	action: () => boolean | Promise<boolean>;
};
