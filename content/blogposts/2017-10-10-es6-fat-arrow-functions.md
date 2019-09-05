---
layout: post
title: ES6 Fat Arrow Functions
date: '2017-10-10T14:34:00.003-07:00'
author: Shreerang Patwardhan
tags:
  - ES6
  - fat arrow functions
  - arrow functions
  - ECMAScript2015
  - es arrows
  - ES2015
  - es6 arrow functions
modified_time: '2017-10-11T14:57:15.023-07:00'
photo_url: /blog/ES6.jpg
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-5132122468626234658
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2017/10/es6-fat-arrow-functions.html
---

![ES6 Banner image](/blog/ES6.jpg)
I attended a 2 day **ReactJs 101 Training** last week. Yes! towards the end of 2017 - React 101. That story is for another blog post, but I am happy I took this training. It opened my eyes to a lot of things that I have not been working on and made me realize that I was really falling behind the Javascript scene.

The main thing that I realized I was lacking was **ES6**. I know a couple of things, but am not using it on a regular basis. One statement by the trainer, especially hit me hard.

> "_ES6 has been around for over 2 years now (with babel). There is no reason for you to not use it! If you are not using it today, you are definitely missing the boat!_"

So have now decided to start learning something everyday and post it. Share my learnings with the world and get some feedback, if anyone is willing to share some.

I am going to start with the **Arrow Functions** or as they are very commonly referred to as **Fat Arrow Functions**. Whenever someone refers to a Fat Arrow function there are 3 things that should be considered right away!

1. Syntax
   The **=>** syntax is a short hand syntax for the original function expression. It effectively converts

```javascript
function (arguments) {
  expression
}
```

to basically

```javascript
argumnets => {
  expression
}
```

2. Implicit `return`
   <br />
   If an expression is being used after an arrow, the return is implicit, so no return is required. Again we will look at an example soon.
3. The context of `this`
   <br />
   This is probably the most important offering of the Fat Arrow Functions. `this` is now **lexically** bound to the function. We will look at this in some more detail in the example that follow.

# Fat Arrow Function Examples

### 1. Fat Arrow Syntax example

In the example below we will see how the syntax changes from the previous function expression to fat arrow.

```javascript
// We will cover let in another blog post. If 'let' is making you uncomfortable go ahead
// and change it to 'var'
let util = {
  logging: function(val) {
    console.log(val)
  }
}
util.logging('Logging from old function syntax.')
```

now will become,

```javascript
let util = {
  logging: val => {
    console.log(val)
  }
}
util.logging('This is logged from the fat arrow function.')
```

Pretty simple eh!? Yeah right! Now makes me wonder, why I wasn't using this until now! But now I will be writing all my simple functions in this short hand format.

### 2. Implicit `return`

Think of all the utility functions that you would have in your code base that `return` some value to its caller. Now you can get rid of all those `return` statements, because the fat arrow functions have an implicit return value. Let's look at this is action below.

```javascript
function multiple(a, b) {
  return a * b
}
console.log('2*5 = ' + multiple(2, 5))
```

This will now become,

```javascript
let multiple = (a, b) => a * b
console.log('2*5 = ' + multiple(2, 5))
```

Again pretty simple! Makes me cry at my ignorance &#128532; The new syntax makes life a breeze.

### 3. Lexical `this`

This is most definitely the most important part of this blog post. How does the fat arrow function treat `this` different from the previous function syntax. We will look at it pretty soon, but before that, do you remember all the times when you had to do

```javascript
    var that = this;
    // or
    var self = this;
    // or
    var _this = this;
    // or
    .bind(this)
```

Made life miserable. We had to do one of the above to really maintain the right context of `this`. With fat arrow functions, we don't have to do it anymore. These functions maintain a lexical context of `this`. If you need to understand the different workings of `this` I would recommend you read an [awesome article](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/) on the topic. For the rest, who think they know why we need `var that = this;`; let's take a look at the example below.

```javascript
var user = {
  // The data is what it is just because am a cricket fan
  tournament: 'ICC World Cup',
  data: [
    { name: 'Sachin Tendulkar', age: 18 },
    { name: 'Sunil Gavaskar', age: 22 }
  ],
  clickHandler: function() {
    var self = this // You know what this is!
    this.data.forEach(function(person) {
      // We need self so that we get access to the value of 'tournament'
      // which is outside of this.data
      console.log(
        person.name +
          ' has played the ' +
          self.tournament +
          ' at the age of ' +
          person.age
      )
    })
  }
}
user.clickHandler()
```

The above code when written as a Fat Arrow function, is going to blow your mind away!

```javascript
var user = {
  tournament: 'ICC World Cup',
  data: [
    { name: 'Sachin Tendulkar', age: 18 },
    { name: 'Sunil Gavaskar', age: 22 }
  ],
  clickHandler: function() {
    this.data.forEach(person => {
      // Here is all the magic. You can now access the value of 'tournament'
      // directly using `this`
      console.log(
        person.name +
          ' has played the ' +
          this.tournament +
          ' at the age of ' +
          person.age
      )
    })
  }
}
user.clickHandler()
```

In ES5, `bind()` or `var that = this;` are necessary as functions create their own `this`. We need to store the parent `this` in a variable that can be referenced in the callback or take care of binding ourselves. However, in ES6, Arrows instead bind `this` to the immediate enclosing lexical scope. Much better, right! These arrow functions seem so much more natural.

This concludes this blog post of ES6 Arrow functions or the Fat Arrow functions. Make sure you start using it right away! Y0u don't have to go to your code base and start converting functions immediately, but at least start using this new syntax for all the new functions that you will write from here on.

I know I am joining the band wagon really late and definitely am not one of the early adopters, but there definitely would be at lest one person I would be able to help with this post apart from the future me! &#128512;

Stay tuned for more posts on ES6 and things that I will keep learning. For those who have followed this blog of mine, from it's early days, you will see a lot more posts! Until next time - have fun with the fat arrow functions!
