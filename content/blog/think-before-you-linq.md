---
title: Think Before You LINQ
date: 2011-11-03
tags: ['blog', 'programming', 'csharp']
---

LINQ is an awesome feature which I like the most in C#. The abstraction, expressiveness and the power it offers to the code are simply amazing. In general when we think of abstractions, we tend to think towards expressiveness and [fluent interfaces](http://martinfowler.com/bliki/FluentInterface.html) and get carried away.

Efficiency of an abstraction is often an afterthought (Based on my experience, correct me if am wrong) and also it is very hard to define an abstraction which should be efficient for all the real world problems it address. When we encountered any efficiency issue in an abstraction, it is our primary responsibility to get rid of it.

Let us assume that you have found an efficiency issue with an abstraction. How would you troubleshoot it? Think! I believe, awareness of internals of the abstraction would be the prime prerequisite to circumvent the problem.  Hence as a professional developer we should be aware of what is happening under the hood when we use LINQ or any such kind of abstractions. Though we are not going to employ this in most of our coding efforts, I feel it would be an ideal weapon that we should keep in our arsenal.

I have encountered one of such efficiency issue with LINQ and it really made me to think twice (even thrice) before applying LINQ to solve the problems. Let me explain it through a simple example. Here is the problem which I am going to solve through LINQ.

“I need a method that should take a collection of numbers as its parameter and write all the numbers in the console. If the collection contains only one number it should not write anything”

Here is the code snippet which address this problem and along with the output.

![](/assets/images/blog/think-before-you-linq/1.png)

I have used two abstractions on this function, one is the LINQ extension method “Count” and the other one is iterating through the enumeration abstraction. Would you able to find an efficiency issue lurking on this very simple function? Kudos if you find it out.

Let me give a small background about LINQ extension methods and Enumeration. Most of the LINQ extension methods are using lazy execution internally and computes the enumeration on demand basis. However some extension methods (`Count`, `Sum`) collectively called [Aggregate Operators](http://code.msdn.microsoft.com/LINQ-Aggregate-Operators-c51b3869) causes immediate execution instead of lazy execution on the enumeration. We can we make an enumeration to enumerate lazily by using [yield](http://msdn.microsoft.com/en-us/library/9k7k7cf0.aspx) statements. Enough theory,  let us see some code which shows the efficiency issue associated with the function that we have seen earlier

![](/assets/images/blog/think-before-you-linq/2.png)

I have added some code in “PrintMe” method to log how it is actually getting executed. Also I have added the “GetNumbers” method which lazily creates a list of numbers using yield statement.

Now can you able to find the exact issue associated with the method “PrintMe”? The red lines are areas of concern. The list is yielded twice!! One while using the Aggregate Operator of LINQ “Count” which causes immediate execution results enumeration all the yields and the second one is yielding the list once again lazily when enumerating through “foreach” loop.

Though it is just a matter of nanoseconds in this example, it may be possible candidate of bottleneck in real world. So, whenever you are doing more than one operation on LINQ or an enumeration or both combined, do not forget think about efficiency. In fact we should give a special attention to the speed of our algorithm when we are actually coding it. (Refer [Pragmatic Programmer](http://pragprog.com/the-pragmatic-programmer), Chapter 6, While You Are Coding)

I hope now you are ready to think about efficiency when you code. Here in our case we can get rid of the efficiency issue by converting the enumeration of number to an array or a list using LINQ [convertor operators](http://code.msdn.microsoft.com/LINQ-Conversion-Operators-e4e59714) ToArray or ToList respectively. Like aggregate operators it causes immediate execution and converts the enumeration to the target type. Then we can do the operations on the converted target. Here is the code snippet of that with the output.

![](/assets/images/blog/think-before-you-linq/3.png)

The modified code now iterate through the list only once!!

## Summary

Would you use powerful weapons to get rid of smaller problems, certainly not? LINQ is such kind of powerful weapon which is meant to solve powerful problems. So, think twice before using LINQ and don’t use it blindly. Efficiency Matters!!  