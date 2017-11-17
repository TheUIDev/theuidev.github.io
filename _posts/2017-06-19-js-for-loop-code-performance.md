---
layout: post
title: JS For Loop Code Performance
date: '2017-06-19T21:43:00.000-07:00'
author: Shreerang Patwardhan
tags:
- ES6
- for loop
- fastest for loop
- performance
- code improvements
- code performance
modified_time: '2017-06-19T21:43:44.605-07:00'
thumbnail: assets/blog/For_Loop_Performance_Blog.jpg
dp: assets/blog/For_Loop_Performance_Blog.jpg
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-3693251472270111435
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2017/06/js-for-loop-code-performance.html
---

![Performnce Meme](/assets/blog/For_Loop_Performance_Blog.jpg)

**Perfomance** 💨 is always the keyword! Every single website strives for being fast - lightning fast! Faster the site, better is the user interaction and better is the conversion. I face this challenge on a daily basis to make sites faster and in the process I ended up testing the 'for' loop with different conditions and I am sharing it here. All observations are a result of running multiple tests for the same set of data.

### Regular For Loop 🔁
```javascript
let products = [{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85}];
let arrLen = products.length;
let productsArray = [];

let t0 = performance.now();

for(let i=0; i<arrLen; i++){
  productsArray.push({
    productUPC: products[i].upcNumber,
    productID: products[i].productInfo.productID,
    productQuantity: products[i].quantity,
    productPrice: products[i].retailPrice?products[i].retailPrice:'',
    productSubTotal: products[i].itemTotal?products[i].itemTotal:'',
    productName: products[i].productInfo.productDescription
  })
}

let t1 = performance.now();
console.log("_ JS took " + (t1 - t0) + " milliseconds.");
```
This is a regular, non-ES6, forward moving for loop which takes anywhere between **0.04 to 0.05 ms**.

### Lodash _.ForEach 🔄
```javascript
var products = [{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85}];
var arrLen = products.length;
var productsArray = [];

var t0 = performance.now();

_.forEach(products, function(product){
	productsArray.push({
  		productUPC: product.upcNumber,
		productID: product.productInfo.productID,
		productQuantity: product.quantity,
		productPrice: product.retailPrice?product.retailPrice:'',
		productSubTotal: product.itemTotal?product.itemTotal:'',
		productName: product.productInfo.productDescription
	})
});

var t1 = performance.now();
console.log("_ JS took " + (t1 - t0) + " milliseconds.");
```
This is the lodash version of the for loop (_.ForEach) takes anywhere between **0.18 to 0.21 ms**.

### ES6 for loops
I did a forward iterating and a reverse iterating for loop too and I noticed dramatic improvements in performance.

#### Forward iterating ES6 for loop 🔄
```javascript
let products = [{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85}];
let arrLen = products.length;
let productsArray = [];

let t0 = performance.now();

for(let i=0; i<arrLen; i++){
  productsArray.push({
    productUPC: products[i].upcNumber,
    productID: products[i].productInfo.productID,
    productQuantity: products[i].quantity,
    productPrice: products[i].retailPrice?products[i].retailPrice:'',
    productSubTotal: products[i].itemTotal?products[i].itemTotal:'',
    productName: products[i].productInfo.productDescription
  })
}

let t1 = performance.now();
console.log("_ JS took " + (t1 - t0) + " milliseconds.");
```
This is a regular for loop using ES6 syntax which included 'let' instead of 'var' for variable declaration. The performance improvements here were just amazing. It took about **0.035 to 0.06ms** to execute this for loop.

#### Reverse iterating ES6 For Loop 💨
```javascript
let products = [{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85},{"itemTotal":85,"originalPrice":85,"pickUpFromStore":false,"quantity":1,"retailPrice":85,"siteAvailablilityFlag":true,"productId":2112123827,"upcId":34046523123,"upcNumber":"86279088208xs","productInfo":{"basePriceType":0,"maxQuantity":6,"onSale":false,"productAvailable":true,"productDescription":"Some Product Name","productID":2112827,"productStockAvailability":"2","primaryImageName":"2725839as.fpx","defaultCategoryId":3179125,"lowAvailability":false,"brandName":"Brand Name"},"itemTotalBeforeDiscount":0,"retailItemTotal":85}];
let arrLen = products.length;
let productsArray = [];

let t0 = performance.now();

for(let i=arrLen-1; i<=0; i--){
  productsArray.push({
    productUPC: products[i].upcNumber,
    productID: products[i].productInfo.productID,
    productQuantity: products[i].quantity,
    productPrice: products[i].retailPrice?products[i].retailPrice:'',
    productSubTotal: products[i].itemTotal?products[i].itemTotal:'',
    productName: products[i].productInfo.productDescription
  })
}

let t1 = performance.now();
console.log("_ JS took " + (t1 - t0) + " milliseconds.");
```
As compared to the previous one, I just revered the for loop iteration in this case and the results were extremely good. This for loop took anywhere between **0.004 to 0.009 ms**. This is an amazing improvement over any other loop. Let's tabularize the results so that we can compare it better. 💨

| For Loop Type                  | Time Taken (ms) |
|--------------------------------|-----------------|
| Non-ES6 For Loop               | 0.04 - 0.05     |
| Lodash _.ForEach               | 0.18 - 0.21     |
| ES6 Forward Iterating For Loop | 0.035 - 0.06    |
| ES6 Reverse Iterating For Loop | 0.004 - 0.009   |

Form all the tests that I have executed, I believe that the **reverse looping ES6 for loop** is the fastest and is not just fast, it is like the Usain Bolt of For Loops. 🕶️ Do you guys have the same observations or do your tests vary from mine? Which for loop do you prefer? Any faster replacement for the for loop itself? Let me know your thoughts in the comments below.

Until next time!
