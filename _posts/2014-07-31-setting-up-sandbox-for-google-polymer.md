---
layout: post
title: Setting up a Sandbox for Google Polymer
date: '2014-07-31T05:45:00.000-07:00'
author: Shreerang Patwardhan
tags:
- Google Polymer
- Google Polymer Sand-box
- setting up Google Polymer
- Implementing Google Polymer
modified_time: '2014-07-31T05:45:22.258-07:00'
thumbnail: assets/blog/The_UI_Dev_Default.png
dp: assets/blog/The_UI_Dev_Default.png
blogger_id: tag:blogger.com,1999:blog-6009621700449257538.post-8916566660383793885
blogger_orig_url: http://shreerangpatwardhan.blogspot.com/2014/07/setting-up-sandbox-for-google-polymer.html
---

In the last article, we got introduced to [Google Polymer](https://theuidev.github.io/material-ui-google-polymer-web.html) which implements Google's Material Design for the web. Google Polymer is based on the concept of Web Components and provides users with 2 types of components that can be readily utilized - the **Polymer Core Elements** and the **Paper Elements**.

Polymer's core elements are a set of visual and non-visual utility elements. They include elements for working with the layout, user input, selection and scaffolding apps.

<img src="/assets/blog/Googe_Polymer.png" alt="Google Polymer Paper Elements" style="width: 60%;" />

Polymer's paper elements collection implements material design for the web. They are a set of highly visual, highly interactive elements that includes things like controls, layout, hero transitions and scrolling effects.

<img src="/assets/blog/Google_Polymer_Checkbox.png" alt="Google Polymer Paper Elements Checkbox" style="width: 60%;" />

Before we start implementing the Google Polymer Elements, we need to set up a sandbox to try out Google Polymer on our local systems. Follow the steps below and you can successfully set up your Google Polymer sandbox.

## Steps to set-up Google Polymer Sand-box
1. Download the [official zip file](http://www.polymer-project.org/docs/start/getting-the-code.html) of Polymer Paper Elements.
2. When you download a component or components (we are downloading the entire components set for development) as a zip file, you get all of the dependencies bundled into a single archive. You need not install any additional tools.
3. Extract the zip and add the folder to your local web servers home/htdocs folder.
4. That's all that you have to do to get Google Polymer components and set it up on your local system. 🙌

You need to set the paths of the platform js file, the Roboto font and paper-elements html in the head section. Refer to the code below to get an idea.

```javascript
<script src="components/bower_components/platform/platform.js"></script>
<link href="components/bower_components/font-roboto/roboto.html" rel="import" />
<link rel="import" href="components/bower_components/paper-elements/paper-elements.html" />
```

Do not worry about the code above as of now. We will take a look at it in detail from the next post onward, where we take a look at each Paper Element in detail. Stay tuned for the fun!
