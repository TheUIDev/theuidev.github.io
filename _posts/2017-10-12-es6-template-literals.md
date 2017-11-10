---
layout: post
title: ES6 Template Literals
date: '2017-10-12T12:51:00.002-07:00'
author: Shreerang Patwardhan
tags:
- ES6 101
- ES6
- ES6 template literals
- ES6 basics
- ES6 string interpolation
modified_time: '2017-10-12T12:51:20.404-07:00'
thumbnail: assets/blog/ES6.jpg
dp: assets/blog/ES6.jpg
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-412893805628838142
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2017/10/es6-template-literals.html
---

![ES6 Banner image](/assets/blog/ES6.jpg)
This is the fifth post in the ES6 101 series and we will be looking at **template literals** today. Template literals are also sometimes know as **string interpolation**. Before we proceed to dive into our topic today, if you want to look into any of the other topics we have covered so far, then here is a quick reference.
1. [ES6 Fat Arrow Functions](https://shreerangpatwardhan.blogspot.com/2017/10/es6-fat-arrow-functions.html)
2. [ES6 Lexical Declarations Let](https://shreerangpatwardhan.blogspot.com/2017/10/es6-101-lexical-declarations-let.html)
3. [ES6 Lexical Declarations Const](https://shreerangpatwardhan.blogspot.com/2017/10/es6-101-lexical-declarations-const.html)
4. [ES6 Spread Operator](https://shreerangpatwardhan.blogspot.com/2017/10/es6-101-spread-operator.html)

If you are currently working with some HTML templating libraries like Handlebars or Mustache, you are aware of how you can bind data values in your HTML using syntax like ```{{data.value}}```. String literals work very similar in that way. Let's look at a simple example and then get into the details from there on.

## Examples of String Literals
#### Basic expression placeholder
```javascript
    let name = "Shreerang";
    console.log(`Hello World! I am ${name}.`);
```
There are 2 syntactic things to note in the above example.
1. ``` `` ``` are to be used insted of the traditional ```''``` or ```""``` for string literals.
2. The template literal is defined by the ```${}``` syntax.

This is pretty sleek. &#128526; It is even better when you can do the same with object literals. Let's modify the same code above to see how this works!

### Expressions with object literals
```javascript
    let user = {
        "name" : "Shreerang"
    }
    console.log(`Hello World! I am ${user.name}.`);
```
If you are using React already then you would definitely see a lot of benefit here. If you are using Handlebars and are wondering if you can get replacing and shake up the space, then hold on! You cannot; atleast immediately. I would recommend you read this [article](https://www.keithcirkel.co.uk/es6-template-literals/) for more details.

### Expression Interpolation
This probably is the most powerful feature of Template Literals. You can put any inline code within the ```&{}``` syntax and the code inside will be executed, and added to the string in place. This is pretty cool and opens up so many new avenues.
```javascript
    console.log(`1+1=${1+1}`); // 1+1=2
```
You can also have functions within the expressions. Let's look at an example.
```javascript
    let sum = (a,b) => a+b;
    console.log(`1+1=${sum(1,1)}`) // 1+1=2
```

### Tagged Template Literal
Let us now take a look at a concept called the **tagged template literal**. If you call a function with a template literal, then you will get the composite parts of the template literal. You basically will get access to all the string fragments, and all of the results from each interpolated expression, rather than a processed string.

Sounds confusing? Let's look at an example to try and undersatnd this better.
```javascript
    let name = 'Shreerang';
    let hello = (string, value) => {
        console.log(string); // Welcome Shreerang
        console.log(value); // undefined
    }
    hello(`Welcome ${name}`);
```

```javascript
    let name = 'Shreerang';
    let hello = (string, value) => {
        console.log(string); // ['Welcome', '']
        console.log(value); // Shreerang
    }
    hello `Welcome ${name}`; // This is tagged template literal syntax.
```

As you can see above we are invoking the method ```hello``` in 2 different ways. Observe the difference in syntax. One has the paranthesis ```hello(`Welcome ${name}`)``` in the function call whereas the other does not. ```hello `Welcome ${name}` ```. The second syntax is called the **tagged template literal** whereas in the first the template literal `Welcome ${name}` is evaluated and then sent as a string to the ```hello``` method.

Hope this clears up the confusion around tagged template literal. This was the last part of this tutorial and we can conclude this post with the following takeaways.
1. Template literal can be used as a basic expression holder.
2. Template literals work with an object literal too.
3. Any inline code within the template literal will be excuted and added to the string inline.
4. Tagged template literal gets you access to all the strings as an array and also the values passed to a function.
5. Template literals are **not** yet ready to replace Handlebars or such similar library.

Hope you found this article helpful. We will continue with the series and look at a new topic in the next post. Until then, start using ES6. The time is now! &#128521;
