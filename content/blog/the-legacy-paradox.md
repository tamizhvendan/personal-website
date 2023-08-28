---
title: "The Legacy Paradox: When Codebases Age in a Blink and How to Reverse the Trend"
date: 2023-08-27T19:09:00+0530
tags: ['blog', "craftsmanship"]
eleventyExcludeFromCollections: true
---

Today I come across [a LinkedIn Post](https://www.linkedin.com/feed/update/urn:li:activity:7101379896521740288/) with the below image 

![](/assets/images/blog/the-legacy-paradox/cover.jpeg)

Whenever I see a post like this that captures a common problem in software development with a funny image in the Social Media, I always wonder **what's next?** Yeah, It's a general problem and everyone who liked/commented/shared resontes with the experience. But **what's next?** 

I have intentionally used "**What's next**" twice to reiterate a point. 

Our human tendency is to compare our situation (especially our problems) with the others. If those others are also facing a similar situtation (or the same problem), we feel good that we are not alone. Thanks to the majority/average mindset that we inherited, some folks even consider this as a norm and lead their life. 

Only very few takes the next step to overcome their current problem and drive towards the solution. If you are someone who wants to overcome this so called "Legacy Codebase" problem, then this blog post is for you!

## What is Legacy Codebase?

A well known definition from [a classic book](https://www.goodreads.com/en/book/show/44919) on this subject says "Legacy code as code that doesn't have tests". According to its Author, Michael C. Feathers,

> “Code without tests is a bad code. It doesn’t matter how well written it is; how well structured it is, how well encapsulated it is. Without test there is no way to tell if your code is getting better or worse”.

Once I was working with a six year old codebase that had tests. But the challenge was writing the tests itself. If developing a feature or a bug fix took `n` hours, writing tests and fixing the failing tests took twice (sometime thrice) the amount. Since these tests don't have tests, won't we call it legacy?

My another experience with a ten year old codebase was even more harder. Even though it had tests, running all of them takes around 30 minutes. The tests were written in such a way that the order of the execution matters and making sense of the tests is very hard. Does it qualify as legacy?

To quote one more final example, a another tweleve years old codebase had a very good test coverage than the above but the actual code is very hard to work with. It had global mutable state all over the places. There were atleast three ways of doing the same thing. In most of the places, the business logic is intertwined with the database and web layers. Adding a trivial feature took days! Can we say this as legacy?

Like most of the terms in Software Development, the term "Legacy Codebase" means different things to different people. It is difficult to arrive at a universal definition that everyone will agree on. So, let me define it in terms of the characteristics of a non-legacy code

## Characteristics of a Non Legacy Codebase

### Feedback Mechanism

Most of the time, Software development is all about making changes to an existing system to incorporate a new feature or fix a bug. When we make these changes, we need a **feedback** mechanism on three things

1. Does the new change work as expected?
2. Does it breaks any existing functionality?
3. Are there any [second order effects](https://personalmba.com/second-order-effects) because of this change?

This feedback should be reliable and faster. Typically we achive this in the form of tests. Absence of this feedback is equivalent to shooting in the dark. That's why Michael Feathers emphasised the importance of test. 

### Ease of change


