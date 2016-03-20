'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import validator from 'vue-validator'
import routerMap from './routers'
import FastClick from 'fastclick'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(validator);

let router = new VueRouter({
    hashbang: true,
    history: true,
});

let app = Vue.extend({});

routerMap(router);

router.start(app, "#app");