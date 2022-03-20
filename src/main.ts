import Router from './Router.svelte';

import './styles/tailwind.scss';
import './styles/global.scss';

const app = new Router({
    target: document.getElementById('app'),
});

export default app;
