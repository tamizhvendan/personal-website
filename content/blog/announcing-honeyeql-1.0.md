---
title: "Announcing HoneyEQL 1.0"
date: 2023-08-16
tags: ['blog', 'clojure', 'open-source', 'postgres']
description: "HoneyEQL is a Clojure library that enables you to query the database declaratively using the EDN Query Language(EQL). It aims to simplify the effort required to work with relational databases in Clojure."
---

I am super excited to announce the official `1.0` version of the open-source library [HoneyEQL](https://github.com/tamizhvendan/honeyeql) that I have been working on for the past three years. It's all [started](https://github.com/tamizhvendan/honeyeql/commit/b925247e87ba868857c8ad1e8b7ecdfa9ed21fc4) with a small dream of simplifying the database access story in Clojure, my go-to language for the past six-plus years.  

## Why HoneyEQL?

When a query involves more than one table, the declarative nature of SQL depreciates. Depending on the type of relationship, we have to put appropriate join conditions.

Let's assume that we have the following database schema.

![](https://raw.githubusercontent.com/tamizhvendan/honeyeql/master/doc/img/film_actor_er_diagram.png)

To get all the films of an actor with the id `148`` along with their first name & last name, we have to query it as

```clojure
(jdbc/execute! ds 
  ["SELECT actor.first_name, actor.last_name, film.title
    FROM actor
    LEFT OUTER JOIN film_actor ON film_actor.actor_id = actor.actor_id
    LEFT OUTER JOIN film ON film_actor.film_id = film.film_id
    WHERE actor.actor_id = ?" 148])
```

The resulting query result of this would look like

```clojure
[{:actor/first_name "EMILY", :actor/last_name "DEE", :film/title "ANONYMOUS HUMAN"}
 {:actor/first_name "EMILY", :actor/last_name "DEE", :film/title "BASIC EASY"}
 {:actor/first_name "EMILY", :actor/last_name "DEE", :film/title "CHAMBER ITALIAN"}
 ...]
```

Then we need to do the group by operation on the first_name & last_name attributes at the application layer to get the exact result that we want!

How about making these steps truly declarative?

With HoneyEQL, we can query the database declaratively using the [EDN Query Language(EQL)](https://edn-query-language.org/).

```clojure
(heql/query-single 
  db-adapter  
  {[:actor/actor-id 148] 
   [:actor/first-name 
    :actor/last-name 
    {:actor/films 
     [:film/title]}]})
```

The above query **yields the results** in the **exact-shape** that we wanted **without any** explicit data transformations.

```clojure
{:actor/first-name "EMILY"
 :actor/last-name "DEE"
 :actor/films [{:film/title "ANONYMOUS HUMAN"}
               {:film/title "BASIC EASY"}
               {:film/title "CHAMBER ITALIAN"}
               ...]}
```

HoneyEQL transforms the EQL into single efficient SQL and query the database using [next.jdbc](https://github.com/seancorfield/next-jdbc).

As the query syntax is made up of Clojure's data structures, we can construct it **dynamically** at runtime.

## How is it different from Walkable

[Walkable](https://walkable.gitlab.io/) is the direct inspiration for HoneyEQL. At a high-level, both address the same problem space (querying data using an expressive Clojure's data structures and getting rid of the ORM and its associated complexities). But it varies on the solution space.

* HoneyEQL doesn't need an explicit [registry](https://walkable.gitlab.io/walkable/1.3.0/registry.html). Instead, it relies on the database metadata provided by JDBC to build an in-memory [registry](https://cljdoc.org/d/com.github.tamizhvendan/honeyeql/1.0.0/doc/debugging-troubleshooting#viewing-entities--attributes-of-a-db-schema). 
* Overriding [the EQL syntax](https://cljdoc.org/d/com.github.tamizhvendan/honeyeql/1.0.0/doc/query-syntax#honeyeql-override-2) (called as `:eql.mode/lenient` in HoneyEQL) to improve the developer experience
* The [HoneySQL](https://github.com/jkk/honeysql)'s function syntax for [invoking database functions](https://cljdoc.org/d/com.github.tamizhvendan/honeyeql/1.0.0/doc/aggregate-queries) over the columns.   
* Support for [Mutation](https://cljdoc.org/d/com.github.tamizhvendan/honeyeql/1.0.0/doc/mutation)

## Acknowledgments

HoneyEQL is only possible with the following excellent Clojure libraries.

- [HoneySQL](https://github.com/jkk/honeysql)
- [next-jdbc](https://github.com/seancorfield/next-jdbc)
- [inflections](https://github.com/r0man/inflections-clj)
- [data-json](https://github.com/clojure/data.json)

The samples in the documentation of HoneyEQL use the [Sakila](https://www.jooq.org/sakila) database from [JOOQ](https://www.jooq.org) extensively.

## Getting Started

Getting started in HoneyEQL is straightforward. You can follow this [guide]((https://cljdoc.org/d/com.github.tamizhvendan/honeyeql/1.0.0/doc/getting-started)) or use the [playground project](https://github.com/tamizhvendan/honeyeql/tree/master/playground) and start playing with the library!

It has extensive [documentation](https://cljdoc.org/d/com.github.tamizhvendan/honeyeql/1.0.0) to help you in the journey!

## What's next

I have planned to release a lot of other open-source libraries in the Clojure Web Development space using this library as the epicenter. Stay [tuned](https://github.com/tamizhvendan)! 
