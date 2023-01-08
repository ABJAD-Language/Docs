---
sidebar_position: 4
---

# Triangle of Stars

The following example prints a triangle of stars.

```abjad showLineNumbers
كرر (متغير رقم س = 1؛ س < 10؛ س++) {
  متغير مقطع مثلث = ""؛
  كرر (متغير رقم ش = 1؛ ش < س؛ ش++) {
    مثلث += " *"؛
  }
  أكتب(مثلث)؛
}
```