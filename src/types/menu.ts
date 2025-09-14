export type MenuComponent<T = void> = (props?: T) => Menu;

export type Menu = {
	enter: () => void;
	update: () => Promise<boolean>;
	exit: () => void;
};
