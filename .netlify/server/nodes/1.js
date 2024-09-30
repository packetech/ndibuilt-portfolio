

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Dzw40Qag.js","_app/immutable/chunks/scheduler.DGpLaggK.js","_app/immutable/chunks/index.-l7ojNbS.js","_app/immutable/chunks/entry.BecOZxdx.js"];
export const stylesheets = [];
export const fonts = [];
