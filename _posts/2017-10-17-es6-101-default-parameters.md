---
layout: post
title: ES6 101 - Default parameters
date: '2017-10-17T11:50:00.001-07:00'
author: Shreerang Patwardhan
tags:
- ES6 101
- ES6
- ES6 basics
- ES6 default parameters
- default function parameters
modified_time: '2017-10-17T11:50:22.013-07:00'
thumbnail: assets/blog/ES6.jpg
dp: assets/blog/ES6.jpg
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-6679642616495912931
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2017/10/es6-101-default-parameters.html
---

![ES6 Banner image](/assets/blog/ES6.jpg)
As we make progress in this ES6 series, let's look at **Default Parameters** today. This is the 7th post in the ES6 series. As the name suggests, ES6 now allows you to initialize function parameters with some default values in case no value or ```undefined``` is passed to the function.

When using the ES5 syntax, it is a common practice to check the values of the parameteres in the function body. We would generally do stuff like this.

```javascript
function sum(a,b) {
    var total;
    if (typeof(b) === 'undefined') {
        b = 10; // Default value of b if it is unavailable
    }
    total = a + b;
    return total;
}
console.log('Sum Total is: ' + sum(1)); // 11
```

Other ways of setting the default value of ```b``` would include the following.
```javascript
    b = b || 10; // Default value of b is set
```
or
```javascript
    if(arguments.length === 1) {
        b = 10; // Default value of b is set
    }
```

With ES6, you can now set a defaut value for parameters in the function head itself. Let's modify the above example and rewrite that with ES6.
```javascript
    let sum = (a, b=10) => a + b;
    console.log('Sum Total is: ' + sum(1)) // 11
    console.log('Sum Total is: ' + sum(1,2)) // 3
```
That's it! As simple as that! See how easy life has become! &#128512; &#128525; As can be seen in the example above, if you do send both the parameters in the function call, the default value will just be ignored. &#128526;

One thing to note here is that the default value of a parameter is evaluated at run time. Let's take a look at an example to quickly undersatnd this concept.
```javascript
    let append = (a, b=[]) => {
        b.push(a);
        console.log('New array is:' + b);
}
append(1); // New array is: 1
append(2); // New array is: 2
```

This goes to show that the ```array b``` is initialized to an empty array every single time the function is invoked. Just make sure you keep this mind when implementing **Default parameters** in your code.

This significantly reduces the code, and must be resulting in pretty good performance improvements. I haven't run any tests so far, but I am thinking that I should do a post of performance improvements when using the ES6 features. &#128520; That's for another time though. Until then, enjoy this post and let me know in case you catch any errors with the post. In case you are interested in learning other ES6 features, here's a list of the articles covered in the ES6 series so far. &#128588;
1. [Fat Arrow Functions](https://theuidev.github.io/es6-fat-arrow-functions/)
2. [Lexical Declarations - Let](https://theuidev.github.io/es6-101-lexical-declarations-let/)
3. [Lexical Declarations - Const](https://theuidev.github.io/es6-101-lexical-declarations-const/)
4. [Spread Operator](https://theuidev.github.io/es6-101-spread-operator/)
5. [Template Literal](https://theuidev.github.io/es6-template-literals/)
6. [Rest Operator](https://theuidev.github.io/es6-rest-operator/)
