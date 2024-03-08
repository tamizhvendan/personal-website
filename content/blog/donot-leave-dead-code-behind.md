---
title: Don't leave dead code behind
date: 2024-03-08
tags: ['blog', 'clean-code', 'craftsmanship']
ogImage: "/assets/images/blog/dont-leave-dead-code-behind.jpeg"
---

In software product development, we often remove or update a feature. This practice is widespread in early-stage companies to determine the product's market fit or positioning. 

While removing/updating the feature, we often neglect the corresponding source code that powered it! 

These source codes lie around with references to them all over the place. With the initial set of people leaving and new people joining, no one knows what this code does over the period. This, in turn, affects future code cleanup or refactoring, which is crucial for keeping the code clean and tidy. 

If we don't keep the code in good shape, it will become a mess over time. It results in more development time for adding even a minor feature and many bugs. 

How to fix it?

1. Write code that is easier to delete
2. While removing/updating a feature, prioritize the efforts to delete the corresponding code. 

**Do delete the unused code before they become zombies**

Have you had any bad experiences because of the dead code? Leave a comment. I am looking forward to learning from you!