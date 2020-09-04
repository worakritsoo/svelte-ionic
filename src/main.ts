import App from './App.svelte';

// import { myRoutes as routes } from "./myRoutes.js";

import { routes } from "@sveltech/routify/tmp/routes";


const app = new App({
	target: document.body,
	props: {
		routes,
		name: 'world'
	}
});

export default app;