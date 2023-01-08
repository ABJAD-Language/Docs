---
sidebar_position: 1
---

# Even/Odd Numbers

Even numbers are the numbers that can be divided by 2, while odd numbers are the opposite.

The following example prints for each number between 1 and 100 if it is even or odd.

```abjad showLineNumbers
كرر (متغير رقم س = 1؛ س <= 100؛ س++) {
  إذا (س % 2 == 0) {
    أكتب(س + " مزدوج")؛
  } وإلا {
    أكتب(س + " مفرد")؛
  }
}
```