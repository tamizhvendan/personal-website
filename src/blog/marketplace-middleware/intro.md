---
title: "Building an E-Commerce Marketplace Middleware in Clojure"
date: 2019-07-26T12:42:03+05:30
tags: ['blog', 'programming', 'clojure', 'series']
---

[We](https://www.ajira.tech) recently built an e-commerce marketplace middleware for a leading retail chain for consumer electronics & durables. The middleware enables them to sell their products on multiple e-commerce sites seamlessly.

Through this blog post series, I am planning to share how we developed it in Clojure by building a minimal version of it. 

## Problem Statement

The retailer (our client) runs 134 stores across 32 cities in India. In addition to this, they sell their products in e-commerce marketplaces [Tata-Cliq](https://tatacliq.com), [Amazon](https://wwww.amazon.in) and [Flipkart](https://www.flipkart.com). 

For managing the products inventory, updating the pricing of the product and honouring the customer orders in their 134 stores, they are using a proprietary Order Management System (OMS). To perform similar activities in the e-commerce marketplace sites, they were manually doing it from the seller portal provided by the marketplace. This back-office work is repetitive and exhausting.

They decided to improve this process by performing all the activities using their OMS. They wanted a middleware which will listen to the changes in the OMS and fulfil the order management activities across different marketplaces without any manual intervention. 

## 10,000 Foot View

The system that we built would look like this.

![](/images/blog/marketplace-middleware/middleware-10K-View.png)

The retailer's back office team perform their operations with their OMS. The OMS exposes these activities to the outside system using [IBM MQ](https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_8.0.0/com.ibm.mq.pro.doc/q001020_.htm). 

In response to messages from the OMS, the middleware executes the respective operations (listing a product, unlisting a product, updating price of a product, etc.,) in the marketplace site. 

The middleware also runs some cron jobs which periodically pulls the new orders and order cancellations from the marketplaces and communicate it back to the OMS via IBM MQ. 

The middleware has a database (Postgres) to persists its operational data and exposes this data to the back office team via a dashboard powered by [Metabase](https://metabase.com). 

## How we developed it

As mentioned earlier, we are going to build a minimal version of this project called `Wheel` using which I will be sharing how we implemented it. 

I will also be updating the below list with the new blog post links. 

1. [Bootstrapping the Clojure Project with Mount](/blog/marketplace-middleware/bootstrapping-clojure-project-using-mount-and-aero)
2. [Configuring Database Connection Pooling, Migration and Reloaded Workflow](/blog/marketplace-middleware/configuring-database-connection-pooling-migration-reloaded-workflow)
3. [Configuring Logging Using Timbre](/blog/marketplace-middleware/configuring-logging-using-timbre)
4. [Storing Log Events in Postgres Using Toucan](/blog/marketplace-middleware/storing-log-events-in-postgres-using-toucan)
5. [Using Slack as Log Appender](/blog/marketplace-middleware/using-slack-as-log-appender)
6. [Processing Messages From IBM-MQ in Clojure](/blog/marketplace-middleware/processing-messages-from-ibmmq-in-clojure)
7. [Ranging Items In E-Commerce Marketplaces](/blog/marketplace-middleware/ranging-items-in-marketplaces)
8. [Creating Cron Jobs in Clojure](/blog/marketplace-middleware/creating-cron-jobs-in-clojure)
