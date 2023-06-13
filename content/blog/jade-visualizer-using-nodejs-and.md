---
title: "Jade Visualizer Using Node.js and Socket.io"
date: 2012-05-19
tags: ['blog', "programming", "javascript", 'node.js', 'open-source']
---

*Hurrah! Finally I made it*

> None of my inventions came by accident. I see a worthwhile need to be met and I make trial after trial until it comes. What it boils down to is one per cent inspiration and ninety-nine per cent perspiration”  - Thomas Alva Edison

Today I’m very glad and excited to announce my little contribution to the open source community called [Jade-Visualizer](http://jade-visualizer.herokuapp.com) a web-based visualizer/translator which targets the beginners of [Jade](http://jade-lang.com/) (A widely used [Node.js](http://nodejs.org/) view engine) to learn it effectively.

Its the inspiration from good bloggers, kindled me to [start writing](/blog/thank-god) blogs and Its the inspiration from many people who are all contributing to the open source community, encouraged me to kick start my contribution through this tiny web-app. This is my first step towards a great journey of more than 1000 miles and I hope it would lay a firm foundation.

## What is Jade?

Jade is a high performance template engine for Node.js and the default rendering engine for the [express](http://expressjs.com/) framework. If you are from the ASP.NET MVC background (like me), its similar to [Razor view engine](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-7.0). Unlike razor, Jade is less verbose and easier to read.

## Why Jade-Visualizer?

[W3schools](http://www.w3schools.com/) is my starting point and reference when it comes to basics of web development. I have learned and toyed with JavaScript, html, css in my early days using the “[Try it yourself](http://www.w3schools.com/css/tryit.asp?filename=trycss_default)” feature available in their website. It is very intuitive to use and we can learn effectively by actually getting our hands dirty. Also, the immediate output of what we do would certainly help us (helped me!) to understand things much better.

I am a kind of “Show me the code” programmer, would love to play with code rather than learning by just theory. When I am learning Jade, I found it very interesting as I never exposed to [haml](http://haml-lang.com/) kind of syntax. To learn it, I’ve created a sample web-page in node.js and for each feature in Jade, I’ve modified the jade page and understand its behaviour by seeing the html source in the browser.

One day after toying with Jade for quite some time, I’ve went to bed and it strikes. “How nice it would be to have a “Try it yourself” kind of feature for learning jade ?”  and hence [Jade-Visualizer](http://jade-visualizer.herokuapp.com/)

## How to use Jade-Visualizer ?

Jade-Visaulizer is a single-page app, with only three parts.

1. The Jade Template – A textarea to play with the jade-template
   ![](/images/blog/jade-visualizer-using-nodejs-and/1.png)
2. Data – Want to mix some data with the jade template ? It is for you. Enter some hacky data in JSON format in it and start toying!
  ![](/images/blog/jade-visualizer-using-nodejs-and/2.png)
3. Output – Excited about what would be the generated output ? This part will help you to feed your brain.
  ![](/images/blog/jade-visualizer-using-nodejs-and/3.png)

## Behind the Scene

Curious about what are all the things behind this app ? Here is the list

* [Node.js](http://nodejs.org/) (My new toy in programming)
* [Socket.Io](http://socket.io/)
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
* [CodeMirror](http://codemirror.net/) and [Prettify](http://google-code-prettify.googlecode.com/svn/trunk/README.html)
* [GitHub](https://github.com/tamizhvendan/jade-visualizer)
* [Heroku](http://www.heroku.com/)

## Why Node.js ?

There are lot of fuss about Node.js in the industry. Will it scale ? Is it insanely fast ? JavaScript on server side ? Will it work out?. I am not going to answer for these questions and I am not a expert too! I believe a [simple google search](https://letmegooglethat.com/?q=node.js) will help you much much better than me. Then why this section in this blog post ? Let me explain

I would like to add an another flavour to Node.js by putting my words on why you should learn Node.js especially if you are from a .net background like me

* I’m using [Ubuntu](http://www.ubuntu.com/) to play with node.js – Node has helped me to come out from windows and inspired me to work with Linux for the first time in my life
* I’m using [Vim](http://www.vim.org/) to write node.js apps – Awesome editor! I am regretting myself for not using this so far. Its my default editor even in windows now 
* I’m using [GitHub](https://github.com/) as a version control to store [my nodejs katas](https://github.com/tamizhvendan/NodeJsKatas)
* I’ve full control over my apps in node.js – Its helping me to learn some of the under the hood stuff which I never learnt before. [Source code of Jade-Visualizer](https://github.com/tamizhvendan/jade-visualizer) is an excellent example for this. I am using my own module to serve the static files. Yes, I’m re-inventing the wheel. But I am learning, That’s good for myself!
* I’m getting better at javascript – I love this tricky language and its really twisting my programming brain
* I’m getting exposed to various frameworks, tools, datastores, techniques, skills every day which I like very much
* Last but not least, its helping me to contribute back to the community

*Note: Its just my personal views, I’m just sharing what are all benefits that I am reaping by virtue of Node.js.*

## Summary

I would like to conclude this blog post by dedicating the “jade-visualizer” to all the open-source contributors in the planet. Its you who inspired me! Hearty thanks to one and all :smile: