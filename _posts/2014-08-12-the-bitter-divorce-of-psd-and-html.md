---
layout: post
title: The bitter divorce of PSD and HTML
date: '2014-08-12T00:43:00.003-07:00'
author: Shreerang Patwardhan
tags:
- photoshop to HTML
- Adobe Photoshop
- Photoshop assets
- PSD to HTML
- death of PSD
- the divorce of PSD and HTML
- HTML5
modified_time: '2014-08-12T00:43:52.233-07:00'
thumbnail: assets/blog/The_UI_Dev_Default.png
dp: assets/blog/The_UI_Dev_Default.png
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-6798614446307213344
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2014/08/the-bitter-divorce-of-psd-and-html.html
---

Today's article is based on an interesting post that I read. The original post is in Portuguese and authored by [Fabricio Teixeira](https://www.linkedin.com/in/fabricioteixeira) and can be found at [arquiteturadeinformacao](http://arquiteturadeinformacao.com/) (Now don't ask me pronounce this 😏 😊).

![Photoshop export tool](/assets/blog/Photoshop_Export.jpg)

Some are calling it the death of **PSD**, but let's not get that harsh! I prefer calling it a "divorce". PSD and HTML are both healthy and living strong, just that they do not live together anymore. 💔 "PSD to HTML", which for years was the most accurate and sometimes the only right path to web design process, seems like has its days counted. 🥀 🥀

Firstly you draw a page in Photoshop; impeccable layout, representing exactly how the web pages would appear when opened in a browser. After a sign-off on this picture (PSD) from the client the front end developer transforms these pictures into HTML, CSS and Javascript. The assets are cut, one by one, exported from the PSD and integrated into the HTML. Plugins and new tools are created in the process and some companies even charge upto $100 to do this process for you.

As articulated by Nick Pettit on the [Treehouse Blog](http://blog.teamtreehouse.com/psd-to-html-is-dead), PSD to HTML is a process that makes perfect sense at first glance. It can be a difficult process to start working on the development of a web page without knowing exactly how the designers hope to get the final result. Experience in PSD first and then create a final product seems to be a very reasonable process. 🤷‍♂️

It turns out that the scenario has changed considerably in recent years. The direction in which the web design is heading brings some aspects that make this process of PSD to HTML to start getting outdated. Some major changes that can be noticed include the following.

## Design in CSS
After CSS3, many of the visual effects that were earlier achieved only with the tools of Photoshop (shadow, rounded corners and gradients among many others) started becoming available by mere use of CSS code. Previously, if a box had rounded corners, then the developer had to export the edges as images and make them fit to the pixel. Most modern browsers now support the CSS to implement this. Rare are the scenarios where we still have to support the troublesome Internet Explorer. 🤢 🤢

## CSS Based Frameworks
With CSS frameworks like Bootstrap and Foundation becoming popular, most commonly used components are shipped as part of the framework itself. This reduces the dependancy on Photoshop designs all-together and most developers design their own sites without a PSD which is fast and effective 💨

## Responsive Design
If you are a front end web developer, you are pretty much aware of the challenges involved in designing websites that run on all resolutions available in the market - especially after the rise of smart phones, tablets, phablets and the chaos by the lack of standardization of the screen sizes by the manufacturers of these devices. The Responsive Design comes as a very effective solution to these problems. If you consider the example of rounded corners on buttons again, it is almost impossible to make these fit perfectly on all resolutions available in the market and it deceives those who think that its ok to support the 3 or 4 most common breakpoints and chuck the rest.

<img src="/assets/blog/Screen_Sizes.png" alt="Screen Size comparision" style="width: 60%;" />

## Flat Design
With the trend of flat design setting in, interfaces without much shadow, bevel, emboss and all that jazz allow more and more sites to be designed using CSS alone using images for photos and specific backgrounds only. This has resulted into greatly reduced use of Photoshop visual effects.  

## Market Maturity
Over the years, the web design industry has matured significantly. Designers and developers have begun to learn what works well and avoid what does not. In most companies, designers are expected to have an accurate knowledge of what is achievable with the currently available technologies. No crazy solution is proposed which hasn't been tried and tested earlier.

## Does that mean Photoshop is dead?
No. Definitely not. Photoshop is still very important in web design. However, it is now more of a sketchbook than an actual step in the process of web development. Designers test solutions in Photoshop to determine the harmony of the page and display the visual identity for customers and other stakeholders. The layout also serves as a discussion tool for everyone to come to a consensus on the look that the product should have.

### Update: 2018
I think Photoshop is dead in the web development flow. No one uses it anymore! The industry has moved over to sketching tools, that help teams to get to a design consensus.

## Designing in the browser
Brad Frost is one of the programmers who has captured this shift in thinking. According to him, the best way to design a website in a browser is to get the developer to code on the same day the designer starts thinking on the branding. Below is a interview in which he tells a bit about the process that he usually applies in the projects he participates in.

<div><iframe allowfullscreen="" frameborder="0" height="315" src="//www.youtube.com/embed/5J7mq0ogwBI" width="560"></iframe></div>

This is how the sketch board looks now a days for the developers while the designers create the branding for the customer.

<img src="/assets/blog/Sketch_Board.png" alt="Sketch Board" style="width: 60%;" />

This is how a once popular and sometimes the only method to generate good functioning web pages is slowly and steadily making way for a more developer oriented web development with little to no dependency on Photoshop assets and layouts.
