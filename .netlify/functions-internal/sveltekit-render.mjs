import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/Ndifreke-Okorie-Resume_Software_Developer.pdf","assets/bvambient.css","assets/bvambient.js","assets/particles.js","assets/particles.json","assets/particlesjs-config.json","favicon.ico","favicon.png","favicon_old.png","images/profile.png"]),
	mimeTypes: {".pdf":"application/pdf",".css":"text/css",".js":"text/javascript",".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ChAbU2c8.js","app":"_app/immutable/entry/app.CHi1r9ij.js","imports":["_app/immutable/entry/start.ChAbU2c8.js","_app/immutable/chunks/entry.ClEzFhtY.js","_app/immutable/chunks/scheduler.DGpLaggK.js","_app/immutable/entry/app.CHi1r9ij.js","_app/immutable/chunks/scheduler.DGpLaggK.js","_app/immutable/chunks/index.-l7ojNbS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
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
})());
