---
sidebar_position: 3
---

# Constants

Learn about storing unchangeable values.

## What are Constants? {#what-are-constants}

Constants are very similar to variables, with one major difference is that constants cannot change their values.


## Declaring a Constant {#declaring-a-constant}

The syntax for declaring a new constant is as the following:

1. The keyword `ثابت` (which means constant)
2. The type of the constant

   :::note Constant Type
   Unlike variables, constants can only be of type number `رقم`, string `مقطع`, or bool `منطق`
   :::
3. The name of the constant
4. The assignment symbol `=`
5. The value of the constant (required)

   :::note Constant Value
   The value of a constant can only be a primitive value, such as `12`, `"مرحبا بالعالم"`, or `صحيح`
   :::
6. A semicolon `؛` for ending the statement

An example of declaring a number constant of name باي and value 3.14:

```abjad
ثابت رقم باي = 3.14؛
```

## Using a Constant {#using-a-constant}
Using a constant doesn't differ than using a variable at all.

An example of printing the value of a constant:

```abjad
ثابت رقم باي = 3.14؛
أكتب(باي)؛
```