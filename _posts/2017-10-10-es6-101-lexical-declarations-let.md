---
layout: post
title: ES6 101 - Lexical Declarations Let
date: '2017-10-10T16:08:00.002-07:00'
author: Shreerang Patwardhan
tags:
- variable let
- ES6
- let variables
- ES6 let
- let vs var
modified_time: '2017-10-16T12:48:31.744-07:00'
thumbnail: assets/blog/ES6.jpg
dp: assets/blog/ES6.jpg
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-2325286027191764472
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2017/10/es6-101-lexical-declarations-let.html
---

![ES6 Banner image](/assets/blog/ES6.jpg)
This is the second post in the **ES6** series and we will be covering a lexical declaration - **'Let'** today. Before this we have looked into the [ES6 Fat Arrow Functions](https://theuidev.github.io/es6-fat-arrow-functions/). We looked at the syntax changes from ES5 to ES6, how ```return``` is implicit and how ```this``` works with the new Arrow syntax.

Let's now look at what ```let``` is. Simply put, ```let``` is the new ```var```. Then what is the difference you ask! well, let's look at right now. Whenever you see ```let``` in your code base, you should now consider the following thing.

1. The scope of the variable declared with the ```let``` keyword is **limited** to the block, statement or expression that it is being used in. This differs from the ```var``` keyword, which defines variables globally or local to a function regardless of block scope.

Let's take a look at a few examples to see how ```var``` and ```let``` differ from each other.

## Examples using ES6 ```let```
1. ```let``` does not attach anything to ```window``` &#128525;
```javascript
    var a = 10;
    let b = 20;
    console.log(window.a); // 10
    console.log(window.b); // undefined
```
2. Variables with ```let``` cannot be redeclared &#x1f60d;
```javascript
    var a = "Original Value";
    var a = "Re-declared Value";
    console.log(a); // Re-declared Value

    let a = "Original Value";
    let a = "Re-declared Value";
    console.log(a); // Uncaught SyntaxError: Identifier 'a' has already been declared
```
The ```Uncaught SyntaxError: Identifier 'z' has already been declared``` error will come up when you try re-declaring the variable itself. The code will not even reach the ```console.log``` statement.

3. The most important of all things is that the scope of the variable is now **limited** to the block within which the variable is declared.
```javascript
    {
        var a = 10;
    }
    {
        let b = 20;
    }
    console.log(a); // 10
    console.log(b); // Uncaught ReferenceError: b is not defined
```
This error ```Uncaught ReferenceError: b is not defined``` goes to prove that the scope of variable 'b' is not global anymore. If we had to fix the above code, we would have to do the following.
```javascript
    {
        var a = 10;
    }
    {
        let b = 20;
        console.log(b); // 20
    }
    console.log(a); // 10
```

To conclude this post, let's look at how we can start using ```let``` in place of ```var``` in our code base today! Identify all the variables that are not global in your code. Replace all these with ```let``` instantly and your code should continue to work. If something breaks, then most probbaly you are using a variable in a way it is not supposed to be used. For all the variables that have been declared globally &#128561;, look into why would you need it and scope them immediately.

I am looking forward to your feedback and a new post in this ES6 series comes tomorrow. Stay tuned! Until then, go change your ```var``` to ```let```.
