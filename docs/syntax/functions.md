---
sidebar_position: 10
---

# Functions

Learn about the basic way of code reuse.

## Definition {#definition}

The concept of functions in programming is similar to that in Mathematics. It's map that takes some parameters and
return some result.

Functions help programmers give names for their code, making it easier to understand and analyze. They also help in
abstracting things and reusing the code.

## Syntax {#syntax}

### Defining a Function {#defining-a-function}

The syntax of defining a function goes as the following:

1. The keyword `دالة`
2. The name of the function
3. An opening bracket `(`
4. Arbitrary number of parameters, seperated by commas (each parameter consists of a type followed by a name)
5. A closing bracket `)`
6. A colon `:`
7. The type of the returned value of the function (In case the function does not return a value the keyword `لاشيء`
   which means void or nothing should be used)
8. An opening brace `{`
9. Some code
10. A closing brace `}`

#### Example {#defining-a-function-example}

The following example defines a function that takes two numbers as parameters, and then returns their sum.

```abjad
دالة جامعة (رقم أ، رقم ب): رقم {
   أرجع أ + ب؛
}
```

### Calling a Function {#calling-a-function}

Once we call on a function, it gets executed.

And the syntax for that goes as the following:

1. The name of the function
2. An opening bracket `(`
3. The values we want to pass as parameters (Their number should be equal to the number of parameters the function
   takes, which is defined in the function definition).
4. A closing bracket `)`
5. A semicolon `؛`


#### Example {#calling-a-function-example}

Let's print the sum of every two consecutive numbers from 0 to 9 using the function we declared above.

```abjad
كرر (متغير رقم س = 0؛ س < 10؛ س++) {
   أكتب(جامعة(س، س + 1))؛
}
```