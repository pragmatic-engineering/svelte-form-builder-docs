import { writable } from "svelte/store";

export type theme = "light" | "dark";
export const theme = writable("light" as theme);
