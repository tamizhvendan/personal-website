---
title: Programmatic Solution for a Real Time Numerology Belief
date: 2011-01-07
tags: ['blog', 'programming', 'csharp']
---

Three years back, I got a call from one of my friend. During the call he conveyed that he bought a new motor bike and asked my help to get the registration number for his motorbike. You may ponder how I am going to help to him in this regard.

Actually he was looking for an exclusive four digit registration number for his motor vehicle based on numerology with the following conditions.

1. The recursive sum of all the four digits should be `1`.
2. Four digits of the number should be in ascending order. i.e., First number should be less than second, second less than third and third less than fourth.

To be honest, I was puzzled when he stated the above conditions. I asked him to give some time to find out those exclusive numbers. When I thought of this problem, I felt why didn’t automate this task by writing a program!! Hence this blog post!!

I usually do coding by divide and conquer approach. i.e., Split the entire problem into small logical units, and then integrate those small logical units to create the final one. Here in this case the following are the logical units.

1. Unit to find those exclusive vehicle registration numbers.
2. Unit to find the recursive sum of a number.
3. Unit to check whether the digits of the given number are in ascending order are not.
  
When you look sharper at the logical unit `2`, it can be divided further into a small logical unit.

1. Unit to find those exclusive vehicle registration numbers.
2. Unit to find the recursive sum of digits of a number
3. Unit to find the sum of digits of a number
4. Unit to check whether the digits of the given number are in ascending order are not.

That’s it. All things were nicely setup to create a program which solves my friend’s vehicle registration number numerology problem. Still one thing is missing the logical flow of program. Before sitting in front of the system and start coding, It is highly recommended to manually work out the program logic in a paper. If you follow this approach, you can develop the program with free of bugs :P So What is the logic to solve this problem ??

Here is the logic!!

1. Traverse from `1000` to `9999`
2. For each no check whether the digits are in ascending order.If the digits are in ascending order, then check whether the recursive sum of the digits of the number is `1` or not. If the recursive sum is `1`, My friend got the solution for his problem.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace VehicleRegNo
{
  class Program
  {
    private static int[] GetExclusiveVehicleRegNos()
    {
      List exclusiveVehicleRegNosList = new List();

      // Range of all four digit numbers is 1000 to 9999
      int count = 0;
      for (int i = 1000; i < 9999; i++)
      {
        if (IsDigitsInAscendingOrder(i))
        {
          if (FindRecursiveSumOfDigits(i) == 1)
          {
            exclusiveVehicleRegNosList.Add(i);
            count++;
          }

        }
      }

      return exclusiveVehicleRegNosList.ToArray();
    }

    private static int FindRecursiveSumOfDigits(int number)
    {
      // Find recursive sum till the sum become a single digit.
      // Eg:- 9999 => 9 + 9 + 9 + 9 = 36 => 3 + 6 = 9
      int sum = FindSumOfDigits(number);
      while (sum > 9)
      {
        sum = FindSumOfDigits(sum);
      }
      return sum;
    }

    private static int FindSumOfDigits(int number)
    {
      int sum = 0;
      while (number > 0)
      {
        sum += (number % 10);
        number /= 10;
      }
      return sum;
    }

    private static bool IsDigitsInAscendingOrder(int number)
    {
      bool isDigitsInAscendingOrder = false;

      // Getting the first digit
      int firstDigit = number / 1000;

      // Getting the second digit
      number %= 1000;
      int secondDigit = number / 100;

      // Getting the third digit
      number %= 100;
      int thirdDigit = number / 10;

      int fourthDigit = number % 10;

      if (firstDigit < secondDigit && secondDigit < thirdDigit 
                      && thirdDigit < fourthDigit)
      {
        isDigitsInAscendingOrder = true;
      }

      return isDigitsInAscendingOrder;
    }

    static void Main(string[] args)
    {
      int[] exclusiveVehicleRegNos = GetExclusiveVehicleRegNos();
      for (int i = 0; i < exclusiveVehicleRegNos.Length; i++)
      {
        // Printing those exclusive nos                
        Console.WriteLine(exclusiveVehicleRegNos[i]);
      }

      /********** Output *********************
      1234
      1279
      1369
      1378
      1459
      1468
      1567
      2359
      2368
      2458
      2467
      3457
      4789
      5689
      ****************************************/
    }

  }
}
```