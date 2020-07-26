import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6713d534 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _16037046 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _11afc505 = () => interopDefault(import('../pages/hashtag/_id/index.vue' /* webpackChunkName: "pages/hashtag/_id/index" */))
const _7a9305d0 = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _e3501f5a = () => interopDefault(import('../pages/post/_id/index.vue' /* webpackChunkName: "pages/post/_id/index" */))
const _c3b04784 = () => interopDefault(import('../pages/user/_id/index.vue' /* webpackChunkName: "pages/user/_id/index" */))
const _7597789d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/profile",
    component: _6713d534,
    name: "profile"
  }, {
    path: "/signup",
    component: _16037046,
    name: "signup"
  }, {
    path: "/hashtag/:id?",
    component: _11afc505,
    name: "hashtag-id"
  }, {
    path: "/post/:id?",
    component: _7a9305d0,
    children: [{
      path: "",
      component: _e3501f5a,
      name: "post-id"
    }]
  }, {
    path: "/user/:id?",
    component: _c3b04784,
    name: "user-id"
  }, {
    path: "/",
    component: _7597789d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
