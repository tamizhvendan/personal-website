---
title: "If Your Fsharp Code Compiles It Usually Works"
date: 2013-08-08
tags: ['blog', "programming", "fsharp"]
---

When I first started learning fsharp, one of the astounding fact that hit my mind was “If the code compiles it usually works!” For a guy who is coming from C# and Java Programming background it was bit weird! After delving deep into F# I have found it very useful and inspired by its awesomeness. 

In this blog-post I’ll be covering some of my experiences that I come across while learning this great feature!

## Fever Diagnosis Program

Let us consider a simple fever diagnosis program. If your temperature is greater than `37.5` Celsius or `99.0` Fahrenheit then you are suffering from fever else you are all right.

## Defining Temperature Types

One of the cool feature that I like about F# is its less verbosity. You can do lot of magic things with less lines of code! Consider our fever diagnosis program, A temperature can be either in Celsius or in Fahrenheit. Here is the equivalent type defined in F#

```fsharp
type Temperature = 
  | Celsius of double
  | Fahrenheit of double
```

Just 3 lines of code!

The type Temperature has been defined as a [discriminated union](http://en.wikibooks.org/wiki/F_Sharp_Programming/Discriminated_Unions). In brief, Discriminated union represent data that can take on one of a few different types of results.

Also in this 3 lines we have described the strongly typed alias for temperature in both Celsius and in Fahrenheit. With this code in place if you want to describe a temperature in Celsius or in Fahrenheit all you need to use the following syntax.

```fsharp
let tempInCelsius = Celsius 10.8
let tempInFahernheit = Fahrenheit 10.6
```

By defining strongly typed cases like this we can make our code cleaner and preventing ourselves from various logic errors that we usually do when we interpret the values of these types. Though we can achieve the same in c# by the following code, it is very elegant to do in F#

```csharp
public abstract class Temperature 
{
  public double Value { get; private set; }

  protected Temperature(double value) 
  {
    Value = value;
  }
}

public class Celsius : Temperature
{
  public Celsius (double value) : base(value)
  {

  }
}

public class Fahrenheit : Temperature
{
  public Fahrenheit (double value) : base(value)
  {
    
  }
} 

public class Program 
{
  public static void Main() 
  {
    Temperature tempInCelsius = new Celsius(10.8);
    Temperature tempInFahernheit = new Fahrenheit(10.6);
  }  
}
```

34 lines of code to achieve the same!!

## Let’s diagnosis fever

With the types for the two representation of temperature in place, our next step is to check the values and find out whether the concerned person is having fever or not. You can do this in F# by using [pattern matching](http://en.wikibooks.org/wiki/F_Sharp_Programming/Pattern_Matching_Basics)

```fsharp
let hasFever temperature =
  match temperature with 
  | Celsius value -> (value > 37.5)
  | Fahrenheit value -> (value > 99.0)
```

F# automatically takes care of decomposing our data into appropriate data structure and all we need to concentrate on our business logic. For a beginner the syntax might look intimidating at first sight but if we use it quite some time you will fell in love with F#

## How can I call this function?

```fsharp
hasFever (Celsius 10.5)
hasFever (Fahrenheit 22.5)
```

Based on the type we are passing in the hasFever function, the corresponding pattern will be matched then the value is decomposed and verified with their respective numbers. Code is prettier, isn’t it ?

## What’s the big deal in it?

You might think apart from reducing the lines of code what else F# adds ?. Great! I was exactly like you when I first come across it. Later I’ve found out it how it can help us to save some hairs :smile:

Let us assume that we forget to handle Fahrenheit in hasFever function

```fsharp
let hasFever temperature =
  match temperature with 
  | Celsius value -> (value > 37.5)
```

Typically in C# if we missed to handle one of the cases like this we won’t be getting any compiler error and It’d crash the application in the runtime. But in F#, the above code would result in following compiler error

```
warning FS0025: Incomplete pattern matches on this expression, 
For example, the value 'Fahrenheit (_)' may indicate a case not 
covered by the pattern(s)
```

So, if you make any logical error like this is your F# code, compiler will show compile time errors and prevents you from building buggy code!

## Summary

If you follow the idioms of F#, it will let you write a better code and even if do some logical error the compiler will come as a rescue!