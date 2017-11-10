---
layout: post
title: ES6 Rest operator
date: '2017-10-12T16:30:00.002-07:00'
author: Shreerang Patwardhan
tags:
- ES6 ...
- ES6 101
- ES6
- ES6 basics
- ES6 rest
- ES6 spread operator
modified_time: '2017-10-12T16:30:29.536-07:00'
thumbnail: assets/blog/ES6.jpg
dp: assets/blog/ES6.jpg
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-7820878582798135330
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2017/10/es6-rest-operator.html
---

![ES6 Banner image](/assets/blog/ES6.jpg)
Welcome to the 6th post in the ES6 101 series and the topic for today is the ```Rest``` operator. The ```rest``` operator now allows us to process infinite parameters in a function.&#128559; Yes. really! If you remember the spread operator ```...``` we discussed previously in this series, the rest operator looks the same ```...``` Let's dig into how we can use the rest operator. It is really simple and easy to work with.

## Examples for ES6 Rest operator

**Problem Statement:** Calculate the sum of all numbers sent to the add function.
To achieve this in ES5, we would find the number of parameters and then run a for loop that many number of times and calculate the sum. In ES6, with the rest operator it is a cake walk.
```javascript
    let sum = (a, ...b) => {
        console.log(a); // This is the first parameter.
        console.log(b); // This is an array of the remaining parameters.
        console.log("Total sum is: " + (a + b.reduce((num, total) => num + total)));
    }
    sum(1,2,3,4,5); // 15
    sum(1,2,3); // 6
    sum(7,8,9); // 24
```
As you can see, it is pretty imple and straight forward to use the rest operator. &#128525; We no longer need to loop through the parameters of the function, find their length and all that hassel! So what are you waiting for? Go ahead and start modifying your code right away! Will see you in the next post tomorrow...
