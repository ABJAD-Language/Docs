---
sidebar_position: 2
---

# For Loop

Repeat for specific number of times.

## Definition {#definition}

For loops are a special kind of while loops. They execute some process repeatedly with respect to a change in some counter.
Everything that is done using for-loops can be done by while-loops as well.

## Syntax {#syntax}

The syntax for for-loops goes as the following:
1. The keyword `كرر`
2. An open parenthesis `(`
3. Declaring a counter variable or assigning a value to a declared variable
4. A semicolon `؛`
5. The The upper\lower limit of the counter
6. A semicolon `؛`
7. The value change that should happen on the counter after each iteration (can be a [postfix](../operators#number-postfix), [prefix](../operators#number-prefix), or a [binary assignment operation](../operators#number-binary-assignment-operations))
8. A closing parenthesis `)`
9. An opening curly brace `{`
10. Some code that is to be executed repeatedly
11. A closing curly brace `{`

## Examples {#example}

### Example 1: {#example-1}
The following example prints the numbers from 0 to 9:
* We are declaring the counter `س` as a number variable with value 0
* We configured our loop to execute while the value of `س` is less than 10
* We configured our loop to increment `س` by 1 after each iteration
* In the body, we are printing the value of `س`

```abjad
كرر (متغير رقم س = 0؛ س < 10؛ س++) {
   أكتب(س)؛
}
```

### Example 2: {#example-2}


```abjad
متغير رقم س؛
كرر (س = 0؛ س <= 10؛ س += 2) {
   أكتب(س)؛
}
```