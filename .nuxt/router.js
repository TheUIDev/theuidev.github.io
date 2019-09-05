import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _386fef13 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _3a646318 = () => interopDefault(import('../pages/blog/_year/_month/_day/_slug.vue' /* webpackChunkName: "pages/blog/_year/_month/_day/_slug" */))
const _6526b9d4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/blog",
      component: _386fef13,
      name: "blog"
    }, {
      path: "/blog/:year/:month?/:day?/:slug?",
      component: _3a646318,
      name: "blog-year-month-day-slug"
    }, {
      path: "/",
      component: _6526b9d4,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
