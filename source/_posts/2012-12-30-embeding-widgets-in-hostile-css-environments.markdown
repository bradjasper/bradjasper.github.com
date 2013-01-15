---
layout: post
title: "Embeding Widgets in Hostile CSS Environments"
date: 2012-12-30 22:01
comments: true
published: false
categories: 
---

Over time I've built a few JavaScript embeddable widgets and have always struggled with getting them to look exactly right on every website.

This is because of hostile CSS environments, or not knowing ahead of time what kind of CSS your widget will be sharing the page with.

Note: You can use IFrames here but they represent their own set of challenges.

When you're widget is added to someone's website, it is suddenly under the websites control in terms of styling.

{% gist 996818 %}

<blockquote>
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</blockquote>

It's very common for paddings, margins, line-heights and even colors to become distorted in ways you never intended.

Resets can be helpful here, but in my experience don't completely solve the problem. Not to mention the can add lots of bloat to an otherwise small footprint widget.

To solve this problem, I created the hostile CSS tool.

# Hostile CSS Checker Tool
The tool is a simple way to expose your embeddable widget to common and extreme CSS environments.

Enter your code in the textarea, click Submit, and it will load a CSS file from a popular website. You can click Next/Prev to cycle through all 250 CSS files (you can also use your left/right keyboard keys).

As you cycle through the CSS files, if you notice any small changes in your widget, you can harden that part of your CSS with !important statements (one of the few times this is considered OK).

