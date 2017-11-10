---
layout: post
title: ES6 101 - Destructuring
date: '2017-10-17T15:34:00.000-07:00'
author: Shreerang Patwardhan
tags:
- ES6 101
- ES6
- ES6 basics
- ES6 default parameters
- ES6 rest
- ES6 destructuring
modified_time: '2017-10-17T15:34:18.407-07:00'
thumbnail: assets/blog/ES6.jpg
dp: assets/blog/ES6.jpg
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-4120373506975816327
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2017/10/es6-101-destructuring.html
---

![ES6 Banner image](/assets/blog/ES6.jpg)
ES6 **Destructuring assignments** is the topic of this post and we will take a look at what destructuring means and we will look at multiole examples to understand the concept. As the name suggests, using the destructuring syntax, we would be breaking down values in an array or properties in an object into seperate variables.

Arrays and objects allow you create, on-the-fly various packages of data.
```javascript
    let a = [1,2,3];
```
ES6 destructuring uses similar syntax, however the LHS will now be a variable that would hold the package that you need to create. Sounds complex? &#128531; Not really, just move ahead to the example that follows and you should get the hang of it.
```javascript
    let a = [1,2,3];
    let [x,y] = a; // We are now assigning array 'a' to a new array
    console.log(x); // 1
    console.log(y); // 2

    let [m,n,o] = a;
    console.log(m); // 1
    console.log(n); // 2
    console.log(o); // 3
```
This helps us clearly see what destructuring does for an array! It basically unpacks the values in the array and assigns it to different variables. This destructuring works with object literals too. Let's look at an example.
```javascript
let a = {
    "p": 10,
    "q": 20
}
let {p,q} = a;
console.log(p); // 10
console.log(q); // 20
```
Note however that, the variable names have to be same as the key names. In the example above, if you replace ```let {p,q} = a``` with ```let {m,n} = a``` and then console the values of ```m``` and ```n```. The values will be ```undefined```.

If you need to assign the value to new variable names, then we would have to create a new object in that manner. Let's see how.
```javascript
let a = {
    "p": 10,
    "q": 20
}
let {p: m, q: n} = a;
console.log(m); // 10
console.log(n); // 20
```
Now, remember the ES6 **default parameters**. In case you need to revisit them, jump over to [this](https://shreerangpatwardhan.blogspot.com/2017/10/es6-101-default-parameters.html) article and then come back. You can assign default values to variables and then replace them with values from an array you are destructuring. Let's look at an example. &#128512;
```javascript
    let [a=10,b=20] = [1];
    console.log(a); // 1 Value comes from destructured array that has value 1
    console.log(b); // 20 Default value assigned to b
```
With destructuring the possibilities are endless. Let's look at an example where we want to swap the values of 2 varaibles. In the old ES5 way, it would be done either by using a third temporary variables, or can be done using the same 2 variables as well. Let's see how that would be done.
```javascript
    let a = 5;
    let b = 10;
    let temp;
    temp = a;
    a = b;
    b = temp;
    console.log(a); // 10
    console.log(b); // 5
```
or
```javascript
    let a = 5;
    let b = 10;
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a); // 10
    console.log(b); // 5
```
Let's see what happens to this code when implemented in ES6 with the destructuring syntax.
```javascript
    let a = 5;
    let b = 10;
    [a,b] = [b,a];
    console.log(a);
    console.log(b);
```
Makes life so much better! I am probably saying this again and again, but it really is so simple. I am cursing myself for not using ES6 before this! Really...How could I do this? &#128534; &#128534; Anyways, now we are learning and that's better than not doing it at all.

What you can also do is, ignore the values that you don't need. Again, let's see an example.
```javascript
    let [a,,b] = [1,2,3];
    console.log(a); // 1
    console.log(b); // 3
```
The way in which you can exclude some values from an array, you can also be selective about the values you need and then assign the rest of the values to another variable. To revisit the ES6 ```rest``` operator you can jump to [this](https://shreerangpatwardhan.blogspot.com/2017/10/es6-rest-operator.html) post and come back here.
```javascript
    let [a, ...b] = [1,2,3];
    console.log(a); // 1
    console.log(b); // [2,3]
```

And this concludes our post on ES6 destructuring. To reacp - destructuring actually does what it says. It helps you destructure the values of an array or an object into individual, separate variables which can be used independently. Again, I cannot stress enough on my assumption that these ES6 features should bring in more performance improvements on the code level, and more would come on that in a later post. I have already made a note for myself to do a post on ES6 performance.

Until next time, you can browse through the list of ES6 features that we have covered so far. As usual, let me know of any issues you come across in the post. Have fun! ES6 rocks! &#128526;
1. [Fat Arrow Functions](https://shreerangpatwardhan.blogspot.com/2017/10/es6-fat-arrow-functions.html)
2. [Lexical Declarations - Let](https://shreerangpatwardhan.blogspot.com/2017/10/es6-101-lexical-declarations-let.html)
3. [Lexical Declarations - Const](https://shreerangpatwardhan.blogspot.com/2017/10/es6-101-lexical-declarations-const.html)
4. [Spread OPerator](https://shreerangpatwardhan.blogspot.com/2017/10/es6-101-spread-operator.html)
5. [Template Literal](https://shreerangpatwardhan.blogspot.com/2017/10/es6-template-literals.html)
6. [Rest Operator](https://shreerangpatwardhan.blogspot.com/2017/10/es6-rest-operator.html)
7. [Default parameters](https://shreerangpatwardhan.blogspot.com/2017/10/es6-101-default-parameters.html)
