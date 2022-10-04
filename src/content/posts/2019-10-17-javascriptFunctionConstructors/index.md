---
title: "Understanding Constructor Functions in Javascript"
date: "2019-10-17"
tags: ["Javascript"]
featuredImage: ../../featuredImages/javascriptIcon.png
---

When I was first learning Javascript, one thing that confused me was constructor functions. I understood that they provided a way to create an object, but I did not quite grasp how the object was created in the first place. Honestly, they seemed a bit magical. In this article we will discuss what a constructor function is, and how it works under the hood.

## What Is A Constructor Function?

A constructor function is simply a function that returns an object. The benefit of using a constructor function is that it allows us to create many objects that have the same properties and methods. We'll talk about methods in a future article though, as it is best to add methods to the function's prototype and not directly inside the function definition.

Okay, so let's take a look at a constructor function.

```js
function Person(name, age) {
  this.name = name
  this.age = age
}
```

So, this is simply a function that takes in two parameters, `name` and `age`. We can now call this function and create an object. The catch is, we must call this function with the `new` keyword. I will explain why later.

```js
function Person(name, age) {
  this.name = name
  this.age = age
}

let bob = new Person("Bob", 14)
console.log(bob.name, bob.age) // Bob 14
```

After we call this function with the `new` keyword, an object with a `name` and `age` property is created and returned. The property values are set when we say `this.name = name`, and `this.age = age`.

Of course, we can also create many more objects using this constructor function:

```js
let bob = new Person("Bob", 14)
let john = new Person("John", 54)
let henry = new Person("Henry", 32)
```

In each of these cases, an object with the properties of `name` and `age` is returned.

Up until this point though, it may seem as if constructor functions are a bit mysterious. We called the function with the `new` keyword, and out of no where, an object was created and returned to us. Let's try to clarify what is happening under the hood so we can understand this better.

## Understanding Constructor Functions

The magic of constructor functions happens when we use the `new` keyword. Without the `new` keyword, then the function is a ordinary function. But, when we call a function with the `new` keyword, the following things happen automatically:

1. A new, blank object is created
2. `this` is set to refer to the newly created object
3. The function body executes, and the created object is returned

We are leaving out some details in order to simplify this, but you can read a full description of what happens from the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).

Let's unpack each of these a bit more.

1.  A blank object is created

This is pretty self explanatory. As it says, a new and empty object is created.

2.  `this` is set to refer to the newly created object

This point is important. Every time we use `this` in the constructor function, we are referring to the object that has been created. So, when we say `this.name = ""`, we are actually adding the name
property to the object that was created.

3.  The function body executes, and the created object is returned if the function does not return its own object.

So, the function executes, and when it is done, the object that was created is returned. In the case that the function returns a different object, then that different object will be returned. This point will make more sense in just a few moments.

We can imagine this whole process may look something like:

```js
function Person(name, age) {
  let newPerson = {} // create empty object

  newPerson.name = name // add properties to object
  newPerson.age = age

  return newPerson // return object
}
```

In this example, we create an empty object, add properties to it, and return it. Though not exactly, a similar process happens automatically when we use a constructor function.

We can now call the function the same way as before:

```js
let bob = new Person("Bob", 14)
```

In this case, it does not matter if we specify `new`, because we are returning our own object. When we return our own object, then our object will always be returned regardless if the function was called with `new` or not. So, we can also call the function like this:

```js
let bob = Person("Bob", 14)
```

Hopefully, this example clarified constructor functions a bit. As we can see, all they do is create an object, add properties to that object, and then return that object.

There is one last thing we need to discuss, and that is: What happens if we call a constructor function without the `new` keyword?

## What Happens If I Don't include the New Keyword?

If you call a constructor function without the `new` keyword then two different things can happen depending on if the Javascript mode is on strict or sloppy.

If **strict mode** is on , then the value of `this` will be undefined. So, that means the following code will result in an error:

```js
function Person(name, age) {
  this.name = name
  this.age = age
}

let bob = Person("Bob", 14) // Throws an error because
// `this` is undefined
```

This results in an error because we are trying to add properties to `this` and `this` is undefined.

If **sloppy mode** is on, then `this` will refer to the global object. In the case of running Javascript in the browser, the global object is the `Window` object. So, if we look at the following example:

```js
function Person(name, age) {
  this.name = name
  this.age = age
}

let bob = Person("Bob", 14)
console.log(bob) // undefined
console.log(window.name) // Bob
console.log(window.age) // 14
```

Because we did not specify `new`, then `this` refers to the `Window` object. Since `this` refers to the `Window` object, then this function call adds the `name` and `age` properties to the `Window` object.

In case anyone faces the same issue, I had to use [this online code editor](https://playcode.io/) to verify the sloppy mode example, as it seems as if strict mode is on by default in my code editor.

## Conclusion

You now have a better understanding of what a constructor function is, and how it works under the hood. Hopefully, constructor functions no longer seem magical.

Thanks for reading!
