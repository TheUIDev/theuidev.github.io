importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09eaa7e6efbc75bf1cce.js",
    "revision": "6c6e973fd9c7a042bd74e4c6692c3d94"
  },
  {
    "url": "/_nuxt/2e22c5a29e50153ad7f2.js",
    "revision": "bf9f227e3d7469a3384ce2445185ee90"
  },
  {
    "url": "/_nuxt/64deb89ddf8281fdff7d.js",
    "revision": "c73ebf6b1325e68b8805b5e9db4879b9"
  },
  {
    "url": "/_nuxt/97c6e2bffb254206bd94.js",
    "revision": "b7106aa9da81e795370c0e04229d2e05"
  },
  {
    "url": "/_nuxt/b8149875f10f536a1804.js",
    "revision": "66b219e3ed71b67989c11e9c26a077d0"
  },
  {
    "url": "/_nuxt/beba5bea24e68ed0bafc.js",
    "revision": "f1cf80bbdd3ab401e84597c8128c1102"
  },
  {
    "url": "/_nuxt/c092a34621a2b34d27c6.js",
    "revision": "63ac7cae4451305597353078cabba715"
  },
  {
    "url": "/_nuxt/e3f7935c6daae4698051.js",
    "revision": "449150a16588b9ca9c13bbe66c39f0ab"
  }
], {
  "cacheId": "jekyll2nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
