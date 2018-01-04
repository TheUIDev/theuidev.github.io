---
layout: post
title: Cross browser CSS solution for custom List Icon
date: '2014-05-21T03:05:00.000-07:00'
author: Shreerang Patwardhan
tags:
- cross browser solution to using an image as a list item marker
- using image as a list item marker
- custom list item marker
modified_time: '2014-05-21T03:05:27.076-07:00'
thumbnail: assets/blog/The_UI_Dev_Default.png
dp: assets/blog/The_UI_Dev_Default.png
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-6661967300163648320
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2014/05/list-item-image-marker-cross-browser.html
---

Styling the list item markers is required on so many instances. There are so many readily available list styles like - square, circle, lower-alpha, roman and many more. Even after having a wide range of list styles, we are often faced with the challenge of using a custom list style. This is when we tend to use an icon image for the list items.

With CSS adding a custom image icon for list style is easily possible using the following code.

``` javascript
  list-style-image: url('icon.png');
```

<img src="/assets/blog/Custom_List.png" alt="Custom list style" />

However, this is not as simple as it appears. The above code doesn't display the output in the same way in all the browsers. IE7 and Opera will display the image marker a little bit higher than Firefox, Chrome and Safari. Our dear QA friends, will pounce on this and log an issue. QA 1 up! Now what? The developers have to find a solution to this and most will end up with a dirty hack. To avoid this, and be 1 up on our QA friends, here is a cross browser solution that works!

```javascript
.custom-list{
  background: url('/route/to/list/icon.png') no-repeat left 1px; // This is the most important property in this class
  padding-left: 18px;
  display: block;
  height: 22px;
}
```

You will add this class on every list item. The background is the most important CSS property here. Others are based on the size of the image icon being used. This will give a truely cross-browser implementation a custom list icon using CSS.

Hope this small bit of code proves useful to all of you. If this post has helped you, leave a comment or show your love by liking the [Spatial Unlimited](https://www.facebook.com/SpatialUnlimited) Facebook page. Till next time; happy coding!
