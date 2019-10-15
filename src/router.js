import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/', redirect:  { name: 'foo' } },
    { name: 'foo', path: '/foo', component: Foo },
    { name: 'bar', path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes: routes
});

export default router;