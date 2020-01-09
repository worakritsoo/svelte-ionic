import App from './App.svelte';

import { myRoutes as routes } from "./myRoutes.js";

const app = new App({
    target: document.body,
    intro: true,
    props: { routes }
});

export default app;