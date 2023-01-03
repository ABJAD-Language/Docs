---
sidebar_position: 1
---

# While Loop

Repeat until a condition is false.

## Definition {#definition}

While loop is one of the most common programming concept. It goes by repeating a process until some condition becomes
false. In
other words, it repeats the process "while" the condition is true.

## Syntax {#syntax}

The syntax of a while loop is very basic and it goes as the following:

1. The keyword `طالما`
2. An opening parentheses `(`
3. A condition
4. A closing parentheses `)`
5. An opening curly brace `{`
6. Some code to be executed repeatedly
7. A closing curly brace `}`

## Example {#example}

The following example prints the smallest number that can be divided by 4 and by 6:

```abjad

متغير رقم عدد = 1؛
طالما(!(عدد % 6 == 0 && عدد % 4 == 0)) {
  عدد++؛
}

اكتب("العدد " + عدد + " ينقسم على 6 وعلى 4.")؛

```

:::warning
If we forgot to add the line number 3, where we increment `عدد` by one, our loop wouldn't have finished its work, and it
would've gone forever to terminate!
:::