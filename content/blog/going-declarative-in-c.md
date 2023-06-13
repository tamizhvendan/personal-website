---
title: Going Declarative in C#
date: 2011-11-22
tags: ['blog', 'programming', 'csharp', "functional-programming"]
---

[Declarative programming](http://en.wikipedia.org/wiki/Declarative_programming) is a simpler, more concise way to describe the behavior of a software program than [imperative programming](http://en.wikipedia.org/wiki/Imperative_programming). I am an admirer of declarative aspects of programming ever since I have started writing SQL queries. We always do our best to write code that is easier to read and maintain. Declarative style is one of the proven ways to write clean code. 

[LINQ](http://msdn.microsoft.com/en-us/library/bb308959.aspx) is an excellent example of declarative style programming that enables the developers to simply state what they want to do. When I was learning [higher order functions](http://learnyouahaskell.com/higher-order-functions) in Haskell, I have found the interrelationship between the higher order functions and the LINQ. It really made me to think in a different way to solve a problem. Through this blog post I would like to share my experiments on [higher order functions](http://en.wikipedia.org/wiki/Higher-order_function) in C#.

Let me start with a very simple requirement.

> Write a program to print the even numbers present in the given n numbers

The code implementation fairly straight forward as below

![](/images/blog/going-declarative-in-c/1.png)

Nothing fancy about this trivial thing. Let me add some more twist to the code by adding two more requirements.

> Modify the program implemented above to print odd numbers and multiples of four present in the given n numbers

To be honest, If I have encountered this requirements before I have learnt Higher Order Functions my implementation would be as follows.

![](/images/blog/going-declarative-in-c/2.png)

If you look at the above implementation with a critical eye, you can find a potential candidate of duplication. Let me explain the common pattern that is being used in the implemented PrintXXXX functions. For each number in the numbers enumerable we are doing the following

* Deciding whether the number should be printed or not (**Deciding**)
* Printing the number if it is passes the above decision (**Doing**)

![](/images/blog/going-declarative-in-c/3.png)

All the three functions iterate over the numbers enumerable and print the numbers. The only thing which actually differentiates the functions is deciding which numbers to be printed.

Now the question is how can we eliminate this duplication????

It’s where higher order functions come into picture. If we move the deciding part of the function away from its implementation then we can easily achieve it.   Here we go! The brand new implementation of Print would be

![](/images/blog/going-declarative-in-c/4.png)

In the new implementation we have just isolated the deciding part of the function from its implementation and parameterize it as function delegate that takes an integer as its input and return a Boolean value.  In the client code (Main function) we are actually just calling the print function and declaratively telling it to print only those numbers which satisfies the given condition. As we separated the deciding part from the actual implementation, we can easily accommodate any future requirements like “Printing multiples of five, printing only single digit numbers” by declarative calling the Print function like as below

![](/images/blog/going-declarative-in-c/5.png)

Cool.. Isn’t it ? Let me complicate the things little more. What would you do if you want to call this Print method across different classes?. A notorious option would be creating a [Utility class](http://en.wikipedia.org/wiki/Utility_class) with the Print method and calling it from the other classes. We can also solve these using [Extension methods](http://msdn.microsoft.com/en-us/library/bb383977.aspx) which results a clean readable code like as below

![](/images/blog/going-declarative-in-c/6.png)

So far, so good. We have started with a single function and then we added two more, then eliminated the duplication using Higher Order functions and finally we have made the code readable by using extension method.

Okay. Now “I want to print the strings which starts with ‘s’ in the given n strings ”. Pardon me for complicating things, I will stop by this one.

It is almost logically similar to what we have done so far. Instead of numbers here it is string. How can we put it into action?. Thanks to [Generics](http://msdn.microsoft.com/en-us/library/512aeb7t%28v=vs.80%29.aspx). We can easily achieve this by modifying the extension method to support generic type as below

![](/images/blog/going-declarative-in-c/7.png)

That’s it. Now you are free to play with all sort of logic you want. You can play with different set of conditions to print the elements or even you can also use different collection of your custom classes. And all can be done declaratively!!

Now its time to reveal to the interrelationship exists between the LINQ and the higher order functions. All the LINQ methods are actually using these Print extension methods kind of extension methods under the hood and makes the life of developer easily but letting them to work declaratively.

[Parallel Class](http://msdn.microsoft.com/en-us/library/system.threading.tasks.parallel.aspx) a new addition in C# 4.0, also uses higher order functions and enables the developer to say “Hey CLR, I wanna run these methods parallel”.

![](/images/blog/going-declarative-in-c/8.png)

Awesome! No new thread creation and no verbose.

## Summary
Declarative Programming is powerful tool. It creates more readable, cleaner code and also reduces the possibility of logical mistakes in multiple similar algorithms. That means fewer mistakes now and in the future.