---
layout: post
title: "A gentle introduction to StatsD and Graphite"
date: 2013-01-14 21:45
comments: true
categories: 
published: false
---

This is an introduction to StatsD and Graphite. If you've never used StatsD and Graphite, but think you might need to––this is a good place to start.

# What are StatsD and Graphite?

Your App -> StatsD -> Graphite

StatsD is a stats aggregation server while Graphite is a real-time graphing system.

What this means is you're going to be adding code to your app or website that communicates with StatsD.

StatsD buckets everything up and sends it to Graphite, where you can view and manipulate your data.

Together, the combination can be extremely powerful. If they're configured correctly.

# Common Gotchas
