﻿---
sidebar_position: 1
---

# الأعداد المفردة والمزدوجة

الأعداد المزدوجة هي الأعداد التي يمكن قسمتها على 2، أما المفردة فهي العكس..

المثال التالي يكتب لكل عدد من 1 إلى 100 إن كان مفردًا أو مزدوجًا.

```abjad
كرر (متغير رقم س = 1؛ س <= 100؛ س++) {
  إذا (س % 2 == 0) {
    أكتب(س + " مزدوج")؛
  } وإلا {
    أكتب(س + " مفرد")؛
  }
}
```