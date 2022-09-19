import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _da7897ea = () => interopDefault(import('../pages/order/index.vue' /* webpackChunkName: "pages/order/index" */))
const _43bade82 = () => interopDefault(import('../pages/patient/index.vue' /* webpackChunkName: "pages/patient/index" */))
const _cfce5478 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _ccf590b8 = () => interopDefault(import('../pages/hosp/booking.vue' /* webpackChunkName: "pages/hosp/booking" */))
const _6decf6dc = () => interopDefault(import('../pages/hosp/schedule.vue' /* webpackChunkName: "pages/hosp/schedule" */))
const _0accfd54 = () => interopDefault(import('../pages/order/show.vue' /* webpackChunkName: "pages/order/show" */))
const _a152565e = () => interopDefault(import('../pages/patient/add.vue' /* webpackChunkName: "pages/patient/add" */))
const _739b27fd = () => interopDefault(import('../pages/patient/show.vue' /* webpackChunkName: "pages/patient/show" */))
const _56a515e8 = () => interopDefault(import('../pages/weixin/callback.vue' /* webpackChunkName: "pages/weixin/callback" */))
const _37c7dbc3 = () => interopDefault(import('../pages/hosp/detail/_hoscode.vue' /* webpackChunkName: "pages/hosp/detail/_hoscode" */))
const _9b071ec8 = () => interopDefault(import('../pages/hosp/notice/_hoscode.vue' /* webpackChunkName: "pages/hosp/notice/_hoscode" */))
const _59534482 = () => interopDefault(import('../pages/hosp/_hoscode.vue' /* webpackChunkName: "pages/hosp/_hoscode" */))
const _045f330c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/order",
    component: _da7897ea,
    name: "order"
  }, {
    path: "/patient",
    component: _43bade82,
    name: "patient"
  }, {
    path: "/user",
    component: _cfce5478,
    name: "user"
  }, {
    path: "/hosp/booking",
    component: _ccf590b8,
    name: "hosp-booking"
  }, {
    path: "/hosp/schedule",
    component: _6decf6dc,
    name: "hosp-schedule"
  }, {
    path: "/order/show",
    component: _0accfd54,
    name: "order-show"
  }, {
    path: "/patient/add",
    component: _a152565e,
    name: "patient-add"
  }, {
    path: "/patient/show",
    component: _739b27fd,
    name: "patient-show"
  }, {
    path: "/weixin/callback",
    component: _56a515e8,
    name: "weixin-callback"
  }, {
    path: "/hosp/detail/:hoscode?",
    component: _37c7dbc3,
    name: "hosp-detail-hoscode"
  }, {
    path: "/hosp/notice/:hoscode?",
    component: _9b071ec8,
    name: "hosp-notice-hoscode"
  }, {
    path: "/hosp/:hoscode?",
    component: _59534482,
    name: "hosp-hoscode"
  }, {
    path: "/",
    component: _045f330c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
