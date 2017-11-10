---
layout: post
title: ES6 101 - Spread operator
date: '2017-10-11T20:16:00.001-07:00'
author: Shreerang Patwardhan
tags:
- ES6 101
- ES6
- ES6 basics
- ES6 spread operator. ES6 ...
modified_time: '2017-10-16T11:10:47.837-07:00'
thumbnail: assets/blog/ES6.jpg
dp: assets/blog/ES6.jpg
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-14066384468544939
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2017/10/es6-101-spread-operator.html
---

![ES6 Banner image](/assets/blog/ES6.jpg)
Welcome to the fourth post in the ES6 101 series and the topic of discussion today is the **Spread operator** or the **dot dot dot operator** ```...```. It is not very common to call it the "dot dot dot" operator, but I just kind of like the ring to it! Also when you say "dot dot dot" it actually helps me visualize unpacking multiple gifts from a gift box. Wondering why I am taking about gifts and gift boxes and "dot dot dot". Well, the **spread operator** ```...``` is actually more like unwrapping gifts from a gift box. The spread syntax allows an iterable such as an array expression to be expanded in-place. Let's actually dive into some examples straight away. It is much more simpler that way!

## Examples of the ES6 Spread Operator ```...```
### Example #1
**Problem statement:** Let's write a function to display the sum of 3 numbers passed to it in an array.
We would have done this as follows in the old ES5 way. &#128527;
```javascript
    var arr = [1,2,3];
    function sum(a,b,c) {
        var output = a + b + c;
        console.log("Sum of 3 numbers is: " + output);
    }
    sum.apply(null, arr); // Sum of 3 numbers is: 6
```
It is common to use ```Function.prototype.apply``` in cases where you want to use the elements of an array as arguments to a function. Using ```apply``` is a far better way of doing things than the the traditional ```for``` loop. Let's take a look here. &#128546;
```javascript
    var arr = [1,2,3];
    function sum(arr){
        var output = 0;
        for (var i=0; i<arr.length; i++){
            output = output + arr[i];
        }
        console.log("Sum of 3 numbers is: " + output);
    }
    sum(arr);
```
Now let's look at how we would do the same thing in ES6 spread
```javascript
    let arr = [1,2,3];
    let sum = (a,b,c) => "Sum of 3 numbers is: " + (a + b + c);
    sum(...arr); // Sum of 3 numbers is: 6
```
Pretty mind boggling, right? &#128525; Looks like we can replace apply completely. Don't need it anymore. The spread operator can also be used multiple times. &#128526; Let's see how.
```javascript
    let arr = [1,2,3];
    let sum = (a,b,c,d,e) => "Sum of 5 numbers is: " + (a + b + c + d + e);
    sum(...arr, ..[4,5]); // Sum of 5 numbers is: 15
```

### Example #3
**Problem Statement:** Let's try to merge and concatenate 2 arrays.
Let's start with the simpler of the 2. We need to concatenate 2 arrays. Now that's simple! We can just do the following.
```javascript
    let concatArr = array1.concat(array2);
    // or the other way around, based on requirement
    let concatArr = array2.concat(array1);
```
No big deal! Pretty straightforward. Now let's say we have to merge 2 arrays at a specific location. How would we go about that? Well, array's have some very powerful methods that can come to our rescue. The knights in shining armour would have to ```push```, ```splice``` and ```concat``` for us to win the battle. Looks like a pretty difficult task.

Now obviously, since we are taking about the ```...```(spread) operator, most definitely it is going to come to our rescue. Let's see how.
```javascript
    let arr1 = [1,2,3];
    let arr2 = [4,5];
    let concatArr = [...arr1, ...arr2];
    console.log(concatArr); // That is all. You have your concatenated array!
    let mergeArr = [1, ...arr2, 2, 3];
    console.log(merge Arr); // Now you have your merged array [1,4,5,2,3]
```

So, as you might have gathered by now, the spread operator ```...``` allows you to unpack an array or iterate through the contents of the array and provide them directly to a function as an argument. The function can then process this information and retun a value.

Hope you now have an understanding of how the spread operator works. Go ahead and figure out the specific use cases in which you can make use of the spread operator in your code base and make your code ES6 compliant!

In case you want to look at other posts in the ES6 101 series, here are the links for your quick reference.
1. [ES6 Fat Arrow Functions](https://shreerangpatwardhan.blogspot.com/2017/10/es6-fat-arrow-functions.html)
2. [ES6 Lexical Declarations Let](https://shreerangpatwardhan.blogspot.com/2017/10/es6-101-lexical-declarations-let.html)
3. [ES6 Lexical Declarations Const](https://shreerangpatwardhan.blogspot.com/2017/10/es6-101-lexical-declarations-const.html)

Hope you enjoy the series and let me know what you think of the posts so far! Until next post! &#128588;
