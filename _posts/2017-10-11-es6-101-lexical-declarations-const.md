---
layout: post
title: ES6 101 - Lexical Declarations - Const
date: '2017-10-11T15:33:00.001-07:00'
author: Shreerang Patwardhan
tags:
- ES6 101
- ES6 Const
- ES6
- ES6 Lexcical Declarations
- ES6 basics
modified_time: '2017-10-11T15:33:37.975-07:00'
thumbnail: assets/blog/ES6.jpg
dp: assets/blog/ES6.jpg
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-8740145346232482856
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2017/10/es6-101-lexical-declarations-const.html
---

![ES6 Banner image](/assets/blog/ES6.jpg)
This is the third post in the ES6 101 Series and we will be looking at the ES6 lexical declartions keyword ```const```. This is more of a continuation of the post on ```let```, so I would highly recommend you to read [that](https://shreerangpatwardhan.blogspot.com/2017/10/es6-101-lexical-declarations-let.html) before you move forward. In case you feel like looking at ```const``` that too works! Go ahead and keep reading.

As we saw in the post yesterday, variables created with the ```let``` keyword have **limited** scope and they live within the block, statement or the expression that they have been declared in. You **cannot** redeclare the ```let``` variables but these variables are **mutable**, i.e. theirs values can be changed and updated.

As the name suggests, ```const``` helps you create variables that have a constant value! These variables are **not** mutable, which means, the value of these variables cannot be changed or updated. Let's look at a few examples to understand this better.

## Examples using ES6 ```const```
```javascript
    const pi = 3.14;
    console.log(pi);

    pi = ++pi; // Uncaught TypeError: Assignment to constant variable.
```
The browser throws an error - ```Uncaught TypeError: Assignment to constant variable.``` which clearly states that you cannot reassign a value to a constant variable. We can however, use the value of a constant variable in other plces and modify the value of such variables. Let's modify the above code to do so!

```javascript
    const pi = 3.14;
    console.log(pi);

    let piLet = pi;
    piLet = ++piLet;
    console.log("Value os piLet: " + piLet); // 4.140000000000001
    console.log("Value os pi: " + pi); // 3.14
```

All of the above holds good, when the value of the constant variable is a number, string or boolean. However, if the value is an object, it should be noted that the constant variable then becomes **mutable**. Let's look at an example, to clarify this.

```javascript
    const moreVars = {
        "someKey": "someValue",
        "moreKeys": "moreValues"
    } // For the lack of creativity! But you get the point!
    console.log(moreVars); // {"someKey":"someValue","moreKeys":"moreValues"}
    console.log(moreVars.someKey); // someValue
    console.log(moreVars.moreKeys); // moreValues

    moreVars["moreKeys"] = "someMoreValues";
    console.log(moreVars.moreKeys); // someMoreValues
    console.log(moreVars); // {someKey: "someValue", moreKeys: "someMoreValues"}
```

There are 2 key take aways from the above examples.
1. If a variable is decalared as a constant using the ```const``` keyword, and has a value set to a string, number or boolean, then the value of such a constant variable **cannot be mutated**.
2. If the value of a constant variable is an **object**, only then can the value of such a constant variable **be mutated**.

Hope this clears up the concept of the ES6 ```const``` for you guys and empowers you to use it in your code basees. In the next post in the ES6 series, we will look at the ES6 ```spread``` operator. Until next time!
