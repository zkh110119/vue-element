import Vue from 'vue'
import Router from 'vue-router';
import Comp from '../components/Component';
import DB from '../components/DB';
import Redis from "../components/Redis";
import ES from "../components/ES";
import Shell from "../components/Shell";
import Sql from "../components/Sql";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Comp',
      component: Comp
    }, {
      path: '/component',
      name: 'Comp',
      component: Comp
    }, {
      path: '/deploy/db',
      name: 'DB',
      component: DB
    }, {
      path: '/deploy/redis',
      name: 'Redis',
      component: Redis
    }, {
      path: '/deploy/es',
      name: 'ES',
      component: ES
    }, {
      path: '/shell',
      name: 'Shell',
      component: Shell
    }, {
      path: '/sql',
      name: 'Sql',
      component: Sql
    }
  ]
});
