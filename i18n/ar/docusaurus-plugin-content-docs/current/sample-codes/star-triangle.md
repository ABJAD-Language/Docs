﻿---
sidebar_position: 4
---

# مثلث النجوم

المثال التالي يرسم مثلثًا من النجوم.

```abjad
كرر (متغير رقم س = 1؛ س < 10؛ س++) {
  متغير مقطع مثلث = ""؛
  كرر (متغير رقم ش = 1؛ ش < س؛ ش++) {
    مثلث += " *"؛
  }
  أكتب(مثلث)؛
}
```