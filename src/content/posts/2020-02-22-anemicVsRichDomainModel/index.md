---
title: "An Anemic Domain Model vs a Rich Domain Model"
date: "2020-02-24"
tags: ["Design Patterns"]
featuredImage: ../../featuredImages/designPatterns.jpg
---

I'm currently in the process making my first full-stack side project. In creating it, I've been researching ways to structure the backend portion, and one of the first challenges I've faced was deciding on whether or not I wanted to use an anemic domain model or a rich domain model. In this post, we are going to take a look at the differences between the two, and then I will discuss which type of model I prefer.

## Domain Modeling

### What Is a Domain Model?

Before we compare an anemic domain model with a rich domain model, let's first understand what a domain and a domain model is.

A **domain** is essentially the problem space we are working in. For example, if we wanted to build an e-commerce site, then our problem space would be online shopping. The **domain model** refers to all of the objects we would need to build our e-commerce site. So, our domain model would consist of classes such as `Customer`, `Purchase`, `Product`, etc. All of these classes and the relationships between them form the necessary components for building our website. They form the domain model.

Now that we understand what a domain and a domain model is, let's define the problem space for a simple app that we would like to build.

### Defining Our Domain

Let's say we want to build an application to calculate the [basal metabolic rate](https://en.wikipedia.org/wiki/Basal_metabolic_rate), BMR, of a user. To calculate a user's BMR, we need his age, gender, height, and weight. Let's see how we can model this problem space using an anemic domain model.

### Anemic Domain Model

In an anemic domain model, the data and logic are separated from one another. This means that we would have a class that contains data with minimal, or no logic. In our example, this would look like:

```cs
    public class User
    {
        public int Age { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }

        // Male or Female
        public GenderType Gender { get; set; }
        public double BasicMetabolicRate { get; set; }
    }
```

The `User` class contains all of the data we need to calculate the BMR. Now, we will create another class to perform the BMR calculation.

```cs
    public class BasicMetabolicRateCalculator
    {
        public static double CalculateBasicMetabolicRate(User user)
        {
            double bmrResult = 0;
            if (user.Gender == GenderType.Female)
            {
                bmrResult = // do calculation
            }

            else
            {
                bmrResult = // do calculation
            }

            return bmrResult;
        }
    }
```

Then to set the `BasicMetabolicRate` property we would do something like:

```cs
User user = new User {
	// set all properties...
}
user.BasicMetabolicRate = BasicMetabolicRateCalculator.CalculateBasicMetabolicRate(user);
```

As we can see in the anemic domain model, the data and logic are separated. The `User` class contains the data, and the `BasicMetabolicRateCalculator` class contains the logic for calculating the BMR.

### Rich Domain Model

Unlike the anemic domain model, in a rich domain model, the data and logic live in the same class. Using the same example as before, this would look like:

```cs
    public class User
    {
        public int Age { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }

        // Male or Female
        public GenderType Gender { get; set; }
        public double BasicMetabolicRate { get; private set; }

        public void CalculateBasicMetabolicRate()
        {
            double bmrResult = 0;
            if (Gender == GenderType.Female)
            {
                bmrResult = // do calculation
            }

            else
            {
                bmrResult = // do Calculation
            }
            BasicMetabolicRate = bmrResult;
        }
    }
```

Then to set the `BasicMetabolicRate` property we would do something like:

```cs
User user = new User {
	// set all properties...
}
user.CalculateBasicMetabolicRate();
```

In this case not only does the data live inside the `User` class, but the logic for calculating the BMR is also contained in this class.

### Summary

So, that's the difference between the two. In an anemic domain model, the data and logic are separated, and in a rich domain model, the data and logic are contained in the same class. Both implementations achieve the same result, however, in the next section, I will discuss why I prefer an anemic domain model.

## Why I Prefer An Anemic Domain Model

I prefer an anemic domain model simply because, in my opinion, it resembles the real world more accurately. For example, let’s say I wanted to calculate my BMR. I know my age, gender, height, and weight, but I have no idea how to use that information to calculate my BMR. Of course, I could look up a formula for performing the calculation and then do it myself, but I am much more likely to plug in my information in an [online calculator](https://www.calculator.net/bmr-calculator.html) and have that calculate my BMR. In this case, notice how I am using external service for this calculation.

If we compare this to our software application, then I am the `User` who knows all of his information, but the logic for calculating my BMR is not known by me, or the `User`. The `User` should not have to care or know about how the BMR is calculated, and in fact, that logic is irrelevant to the `User`. Instead, a different service, such as the `BodyFatPercentageCalculator` class, should be responsible for carrying out the calculation.

This is why I prefer an anemic domain model. It just seems to do a better job of modeling the real world.

## Conclusion

That's it for this post, I hope you enjoyed reading it!

I would love to hear your opinion on which type of domain model you prefer.
