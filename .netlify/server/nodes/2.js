

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CzrYqZdh.js","_app/immutable/chunks/scheduler.DGpLaggK.js","_app/immutable/chunks/index.-l7ojNbS.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
