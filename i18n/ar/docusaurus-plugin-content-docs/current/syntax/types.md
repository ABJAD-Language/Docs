---
sidebar_position: 4
---

# أنواع البيانات

تعلّم\ي أكثر عن أنواع القيم التي يمكن منحها للمؤشرات واسخدامها في باقي المجالات.

للمتغيرات والثوابت في **أبجد** واحد من أربعة أنواع:
1. `مقطع` أي الكتابة النصية العادية
2. `رقم` ويشمل جميع الأعداد الصحيحة وذات الكسور
3. `منطق` أي شرط.
4. نوع مُحددٌ من قبل المُستخدم.

## مفطع {#string}
كل قيمة من نوع مقطع يجب أن تُحاط بمزدوجين. مثال: `"مرحبا بالعالم!"`
:::note
لا يمكن للمقطع أن يمتد على أكثر من سطرٍ واحد.
:::

## رقم {#number}

النوع رقم يشمل جميع الأرقام الصحيحة وذات الكسور بين ±5.0 × 10<sup>−324</sup> و ±1.7 × 10<sup>308</sup>. مثال: `12.3`


## منطق {#boolean}
للنوع منطقي قيمة واحدة من اثنتين، إما `صحيح` أو `خطأ`

## نوع محدد من قبل المستخدم {#user-defined-types}
[//]: # (TODO add link to page)
سنناقشه لاحقا في الأصناف.


## استخراج نوع القيمة {#get-the-type-of-a-value}
يمكننا استخراج نوع القيمة عبر استخدام الكلمة المفتاح `نوع` يليها قوسين داخلهما القيمة نفسها.

مثال: الكود التالي يكتب الجواب: `رقم`

```abjad showLineNumbers
ثابت رقم باي = 3.14؛
أكتب(نوع(باي))؛
```

## التحويل {#conversions}
يمكن التحويل بين الأنواع إن توافرت بعض الشروط.

### من رقم إلى مقطع {#number-to-string}
يمكن التحويل من رقم إلى مقطع عبر نداء الدالة `مقطع` مُعطينها رقمًا.

مثال: قيمة `عشرة` تساوي `"10"`.

```abjad showLineNumbers
متغير مقطع عشرة = مقطع(10)؛
```

### من مقطع إلى رقم {#string-to-number}
لتحويل قيمة من نوع مقطع إلى نوع رقم يجب نداء الدالة `رقم` مُعطينها مقطعًا.

مثال: قيمة خمسة تساوي 5.

```abjad showLineNumbers
متغير رقم خمسة = رقم("5")؛
```

:::warning
المثال التالي خاطئ لأن القيمة لا يمكن تحويلها إلى مقطع

```abjad showLineNumbers
متغير رقم عدد_غير_صالح = رقم("5.3.6")؛
```
:::

### من منطق إلى مقطع {#boolean-to-string}
لتحويل قيمة من نوع منطق إلى نوع مقطع يجب نداء الدالة `مقطع` مُعطينها شرطًا منطقيًا.

مثال: قيمة `جواب` تساوي `"صحيح"`.

```abjad showLineNumbers
متغير مقطع جواب = مقطع(صحيح)؛
```

### من مقطع إلى منطق {#string-to-boolean}
لتحويل مقطع إلى النوع منطق يجب نداء الدالة `منطق` مُعطينها مقطعًا.

مثال: قيمة جواب تساوي خطأ.

```abjad showLineNumbers
متغير منطق جواب = منطق("خطأ")؛
```

:::warning
المثال التالي خاطئ لأن القيمة لا يمكن تحويلها إلى منطق

```abjad showLineNumbers
متغير منطق جواب_غير_صالح = منطق("صح")؛
```
:::