import Router from './routes';

const router = new Router();
window.addEventListener('load', router.handlerViews.bind(router));
window.addEventListener('hashchange', router.handlerViews.bind(router));