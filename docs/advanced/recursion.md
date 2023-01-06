---
slug: recursion
title: Recursion
description: Learn about recursive algorithms with ABJAD.
tags: [recursion, functions, advanced]
---

Recursion is a very powerful methodology in programming. It goes by a function calling itself in its body. And guess
what, it is supported by **ABJAD**!

<!--truncate-->

A recursive function typically is divided into two main parts:

- The base step: the point when the function will be able to make an action or return a value, without the need to call
  itself again
- The recursive step: this resembles the point when the task to be solved is still too advanced to do in one step, so we
  divide it and make the function call itself once or more with different input which will eventually lead us to the
  base step.

:::note
without the base step, the function will keep on calling endlessly and causing the software to crash.
:::

## Example {#example}

The following example calculates the exponential of a number using recursion:

```abjad
دالة احسب_الأس(رقم عدد، رقم أس) : رقم {
	اذا (أس == 0) {
		ارجع 1؛
	}
	
	ارجع عدد * احسب_الأس(عدد، أس - 1)؛
}

اكتب(احسب_الأس(2، 5))؛
# الجواب سيكون 32
```

### Explanation {#example-explanation}

* The **base step** here is the lines 2 to 4. If the variable `أس` equals 0 we should return 1, and there is no need to call on the function recursively.
* The magic happens at line 6: the value is the variable `عدد` multiplied to the result from calling on the function with a degree less by one.
This is the **recursive step**.