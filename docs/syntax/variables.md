---
sidebar_position: 2
---

# Variables

Learn about the simplest way to store values in **ABJAD**.

## What are Variables? {#what-are-variables}

Variables are references to values (data) stored in the memory. From the name, we can infer that the value of a variable
can change with time.

## Declaring a Variable {#declaring-a-variable}

Declaration is creating a new variable, giving it a name, a type, and a value.

The syntax for declaring a new variable is as the following:

1. The keyword `متغير` (which means variable)
2. The type of the variable

   :::note Variable Type
   It can either be a primitive type, such as (number: رقم, string: مقطع, boolean: منطق) or a custom defined one ([learn more](types.md))
   :::
3. The name of the variable
4. The assignment symbol `=`
5. The value of the variable (optional)

   :::note Variable Value
   It can either be a primitive value, such as (`12`, `"مرحبا بالعالم"`) or an expression, such as `(3 + (2 - 4))`
   :::
6. A semicolon `؛` for ending the statement

An example of declaring a number variable of name س and value 1:

```abjad
متغير رقم س = 1؛
```

### Declaring a variable without a value {#declaring-a-variable-without-a-value}

Declaring a new variable does not require specifying its value, that's why when there is no value yet to give, you can
simply just specify the name and the type of the variable, e.g.:

```abjad
متغير رقم س؛
```

:::caution Undefined Variable
When omitting the value from the variable declaration, an `undefined` value will be temporarily assigned to the
reference. This value makes the reference unuseful until given a real value.

i.e.

The following example is <ins>erroneous</ins>:

```abjad
متغير رقم س؛
متغير رقم ش = س؛
```

While the following is fine:

```abjad
متغير رقم س؛
س = 1؛
متغير رقم ش = س؛
```

:::

## Using a Variable {#using-a-variable}

Once a variable was declared with a value, it can be used in the code like any other literal.

An example of printing the value of a variable:

```abjad
متغير مقطع رسالة = "مرحبا بالعالم"؛
أكتب(رسالة)؛
```

## Changing a Variable's Value {#changing-a-variable-value}

Changing the value of a variable, or assigning it a new one, is very similar, in syntax, to declaring one, just without
the `متغير` keyword and the type, that are limited to declaration only.

```abjad
متغير مقطع كلمة = "مرحبا"؛
كلمة = "أهلا"؛
```

:::info
   Changing the value of a number or bool variable is not allowed.
:::
