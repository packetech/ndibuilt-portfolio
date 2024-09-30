export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/bvambient.css","assets/bvambient.js","assets/particles.js","assets/particles.json","assets/particlesjs-config.json","favicon.png","images/profile.png"]),
	mimeTypes: {".css":"text/css",".js":"text/javascript",".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DLYbo18t.js","app":"_app/immutable/entry/app.CFSAkaBK.js","imports":["_app/immutable/entry/start.DLYbo18t.js","_app/immutable/chunks/entry.BecOZxdx.js","_app/immutable/chunks/scheduler.DGpLaggK.js","_app/immutable/entry/app.CFSAkaBK.js","_app/immutable/chunks/scheduler.DGpLaggK.js","_app/immutable/chunks/index.-l7ojNbS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
