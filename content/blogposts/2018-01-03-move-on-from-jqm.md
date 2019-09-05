---
layout: post
title: Moving on 😢 - Life after jQuery Mobile
date: '2018-01-03'
author: Shreerang Patwardhan
tags:
  - jQuery Mobile
  - jQuery Mobile is dead
  - Ratchet
  - Framework 7
  - Ionic
  - OnsenUI
  - jQuery Mobile substitutes
  - Is jQuery Mobile dead
modified_time: '2018-01-03'
photo_url: /blog/The_UI_Dev_Default.png
---

jQuery Mobile continues to be popular even today, though the development of the library itself seems to have come to a stand-still. According to the stats from [BuiltWith](https://trends.builtwith.com/javascript/jQuery-Mobile), about 130K sites are still using jQuery Mobile which also includes about 1.4% of the total top 10K sites.
![BuiltWith Data Graph](/blog/BuiltWith_jqm_data.png)
Also if you look at the number of questions tagged with "jquery-mobile" on StackOverflow, the following graph clearly shows that the number is constantly increasing. This proves beyond doubt that jQuery Mobile framework is still popularly being used.
![StackOverflow Data Graph](/blog/StackOverFlow_jqm_data.png)
There has been only one alpha release in the past 2 years, but 1.4.5 still continues to be the stable release. 🤷🏻‍♂️ In 1.5.0-alpha too, jQuery Mobile has brought in components from jQuery UI, making the library even more sluggish. 🚶 In the mean time however, other frameworks have gone way ahead with their components and performance in general, leaving jQuery Mobile far behind in the race. 🏃💨 jQuery Mobile has been the daddy of all these Mobile frameworks, but looks like the stronger, leaner and faster kids are beating the oldie at it's own game. 😞

So, the million dollar question - "Is jQuery Mobile dead?" Well, technically no. The development is still happening, but at a very slow pace. Even if a stable 1.5.0 is released in 2018, it still would not be as fast, performant and feature-rich as the new frameworks, considering it's integration with the jQuery UI widgets. This is like 2 dead technologies have been married off to each other. It's a super scary episode of "The Walking Dead" .

I think it's time to sunset jQuery Mobile 🥀🌇 and migrate your websites to the newer, better frameworks 🌅 which we will discuss today. Though my heart breaks to say this, but the fact cannot be denied. 💔

With a heavy heart, but in order to look out for our future, let's look at 3 awesome new (not so much) mobile frameworks that can replace jQuery Mobile.

1. [Framework 7](http://framework7.io/) (Top Pick)
2. [OnsenUI](https://onsen.io/)
3. [Ionic](https://ionicframework.com/)

Before we jump into the details of each of these, all of these mobile framework support and are pre-dominantly used for developing hybrid mobile applications. However, these can absolutely be used to build, static HTML websites as well as with popular frameworks like React, Vue, Angular and the likes. So now let's see how each of these stack up against jQuery Mobile.

## Framework 7 👍🏻

The official website for Framework 7 says the following.

> Framework7 - is a free and open source mobile HTML framework to develop hybrid mobile apps or web apps with iOS & Android native look and feel.

1. The most important thing to notice here is that Framework 7 provides native iOS and Android look and feel "out-of-the-box" 😀
2. This framework is completely **library agnostic**. Meaning, the developer need not have expertise with Vue, React, Angular or anything else, except the fact that he needs to know HTML, CSS and Javascript.
3. Having stated the above #, it does support Vue, React and Angular integrations.
4. All the native animations are supported.
5. It is extremely fast.
6. Several ready-to-use UI components.
7. Short learning curve and so you can quickly start migrating from jQuery Mobile to Framework 7.
   You can see all the features live in action with [iOS look & feel](http://framework7.io/kitchen-sink/?theme=ios) and also with [Material Design look & feel](http://framework7.io/kitchen-sink/?theme=md)

## OnsenUI

OnsenUI will be my 2nd pick after Framework 7. OnsenUI v1 requires you to have understanding of AngularJs. However, OnsenUI v2 is the real prize. OnsenUI v2 is **library agnostic** like Framework 7 and again is feature-rich and comes with several ready to use UI components.
You can see all the features live in action with [iOS look & feel](https://onsenui.github.io/vue-onsenui-kitchensink/main.html?platform=ios&iphonex) and also with [Material Design look & feel](https://onsenui.github.io/vue-onsenui-kitchensink/main.html?platform=android)

## Ionic Framework

Ionic framework is extremely popular and gained this popularity in the last 3 years! This however is **not** library agnostic and is tightly coupled with Anuglar Js 1 and/or 2. So if you are planning on using Angular or are already using it with your existing jQuery Mobile application, then Ionic should be your pick. It truly is fast and smooth and has several [UI components](https://ionicframework.com/docs/components) provided out of the box.

Armed with these 3 powerful choices, and jQuery Mobile not seeming to be getting any better in the future, it's high time you sunset your jQuery Mobile sites and migrate to a better and faster framework.

Let me know what your take is on the whole jQuery Mobile situation and what you will be migrating too! Drop in your comments or let's talk about it on [Twitter](https://twitter.com/shreerangp).
