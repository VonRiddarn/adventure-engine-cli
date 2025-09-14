import { createResettable } from "../utilities/resettable.js";

export let isPlaying = true;
export let input: string = "";

export const turnPinned = createResettable(false);
