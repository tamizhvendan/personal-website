---
title: "Keep It Simple"
date: 2016-02-01
tags: ['blog', "craftsmanship"]
---

Last week, I was working on a task which involves populating some PostgreSQL database tables from CSV files. Though this is a straight forward work, I’ve encountered an interesting approach while manipulating a CSV file to adhere some changes in the database schema. In this blog post, I will be sharing what it is and how it made me think better.

Unlike my other blog posts, this post is more on the thought process behind my approach than the code.

## The Story

The CSV file that we suppose to import to a database table has the following Structure with 1000 rows

```csv
code,value
XAS,0.23
SDR,3.21
WFZ,1.87
........
........
```

The column name `code` and `value` are just for illustration.

The Proposed schema change is introduce a new column called `year` with a fixed value `2015` for all the rows. So, the expected CSV file would like

```csv
year,code,value
2015,XAS,0.23
2015,SDR,3.21
2015,WFZ,1.87
........
........
```

A Very Simple Task

Now, How can we solve it?

## Approach 1 - Don’t try this at your office/home

Let me start with an approach number one

> Edit all the rows manually

## Approach 2 - Leverage your programming skill

> Pick your favorite programming language and whack the CSV file

I believe this would be the approach that came to your mind when you read the problem statement. A typical programmer’s instinct!

So, you picked your programming language ‘X’, what would be the next steps

* Open the IDE/Editor - Wait for it to load!
* Create a Project - if required and wait for it also to load!
* Start typing - and your phone rings
* Refer library documentation - or Refer Stackoverflow
* Compile - and wait for it - Ignore this step and wait for a run-time error if your programming language is dynamic
* Execute - A bug -> Go to Google -> Stack Overflow -> Change the code -> Start again
You are done!

*I’ve exaggerated some things here. If you don’t agree with any steps, just ignore that step*

After 2 to 15 minutes (based on your ability & the ceremony of your programming language) you have solved the problem.

Is it really worth? Well, It depends on the context.

If there are lot of CSV files which require the same change or also few more like this will about to come in the near future, then this effort really makes sense

But, here it is only one file which requires the change. So, I feel it is a complex response to a simple problem

## Approach 3 - Use a tool

> Use a shiny CSV management tool to make the changes

It is slightly better approach than the previous one but it also has its own downsides

* Googling to find the tool
* Download it - Your office firewall is blocking that site! / Registration on the * tool site / Requires Java x.x version
* Open the CSV file.
* Refer the tool’s documentation
* Get the job done

You can also use Microsoft Excel to achieve this. But again a heavy solution to solve a simple problem!

There should be a simple approach! That’s what we are going to see next.

## Approach 4 - Find And Replace

> Just use Find and Replace in an advanced editor

This approach involves just three steps

1. Open the CSV file in an advanced text editor (notepad++, atom, sublime text, etc.,)
2. Select all the text and press `tab`
3. Open Find and Replace. Find for `tab` and replace it with `2015,`

That's it!

## Summary

https://twitter.com/chadfowler/status/646624348028190720
