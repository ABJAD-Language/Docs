---
sidebar_position: 4
---

# Data Types

Learn about the types of data can be assigned to references and used elsewhere.

Variables and constants in **ABJAD** can have one of four main types.
1. `مقطع`: text or string
2. `رقم`: number, including all the natural and decimal numbers
3. `منطق`: boolean
4. User-defined type

## String {#string}
A string value must be enclosed by two double quotations. e.g. `"!مرحبا بالعالم"`
:::note
A string value cannot span on more than one line.
:::

## Number {#number}
A number value includes natural and decimal values between ±5.0 × 10<sup>−324</sup> and ±1.7 × 10<sup>308</sup> e.g. `12.3`

## Boolean {#boolean}
A boolean value can have one of two values `صحيح` (true) or `خطأ` (false)

## User-Defined Types {#user-defined-types}

[//]: # (TODO add link to page)
Discussed Later in classes.

## Get the Type of a Value {#get-the-type-of-a-value}
You can get the type of the value using the `نوع` keyword followed by parentheses enclosing the value itself.

e.g. This code will print `رقم`

```abjad
ثابت رقم باي = 3.14؛
أكتب(نوع(باي))؛
```

## Conversions {#conversions}
Conversion is allowed between some of the types under some conditions.

### Number to String {#number-to-string}
Conversion is possible from Number data type to String data type by calling on the function `مقطع` and passing a number.

e.g. `عشرة` will have the value of `"10"`.

```abjad
متغير مقطع عشرة = مقطع(10)؛
```

### String to Number {#string-to-number}
Converting a String data type to Number data type happens by calling on the function `رقم` and passing it a string representation of a number.
e.g. خمسة will have the value of 5.

```abjad
متغير رقم خمسة = رقم("5")؛
```

:::warning
The following example will throw an error since the value is not qualified to be a number

```abjad
متغير رقم عدد_غير_صالح = رقم("5.3.6")؛
```
:::

### Boolean to String {#boolean-to-string}
Converting a Boolean to String happens by calling on the function `مقطع` and passing it a boolean
e.g. `جواب` will have the value of `"صحيح"`.

```abjad
متغير مقطع جواب = مقطع(صحيح)؛
```

### String to Boolean {#string-to-boolean}
Converting a String to Boolean happens by calling on the function `منطق` and passing it a string representation of a boolean value.

e.g. جواب will have the value of خطأ.

```abjad
متغير منطق جواب = منطق("خطأ")؛
```

:::warning
The following example will throw an error since the value is not qualified to be a boolean

```abjad
متغير منطق جواب_غير_صالح = منطق("صح")؛
```
:::