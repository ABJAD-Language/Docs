﻿---
sidebar_position: 7
---

#  العمليات الحسابية

تعلّم\ي عن جميع المعادلات التي يمكنك عملها.

هناك بعص العمليات الحسابية المسموح استخدامها مع كل نوع من أنواع البيانات. بعضُ هذه العمليات أُحادي، أي يتطلب مُعطى
واحدًا، وبعضها الآخر ثنائيٌ أي يتطلب مُعطيين اثنين.

## العمليات الحسابية على الأرقام {#number-operations}

### العمليات الثنائية {#number-binary-operations}

| الرمز | اسم العملية |                             الوظيفة                              | نوع الحاصل |                       مثال |
|:-----:|:-----------:|:----------------------------------------------------------------:|:----------:|---------------------------:|
|   +   |     جمع     |                     تجمع عددين وتعيد الحاصل                      |    رقم     | <pre> الأول + الثاني</pre> |
|   -   |     طرح     |                     تطرح عددين وتعيد الحاصل                      |    رقم     | <pre> الأول - الثاني</pre> |
|   *   |     ضرب     |                     تضرب عددين وتعيد الحاصل                      |    رقم     | <pre> الأول * الثاني</pre> |
|   \   |    قسمة     |                     تقسم عددين وتعيد الحاصل                      |    رقم     | <pre> الأول \ الثاني</pre> |
|   %   |   الباقي    | تقسم الرقم الأول على الرقم الثاني، وتعيد الباقي، أي حاصل الكسور. |    رقم     | <pre> الأول % الثاني</pre> |

### ألعمليات الثنائية المنطقية {#number-binary-logical-operations}

| الرمز |   اسم العملية    |                                           الوظيفة                                           | نوع الحاصل |                       مثال |
|:-----:|:----------------:|:-------------------------------------------------------------------------------------------:|:----------:|---------------------------:|
|   >   |     أكبر من      |      تفحص الرقمين، إن كان الرقم الأول أكبر من الثاني تُعيد صحيح أما العكس، فتُعيد خطأ       |    منطق    | <pre> الأول > الثاني</pre> |
|   <   |     أصغر من      |      تفحص الرقمين، إن كان الرقم الأول أصغر من الثاني تُعيد صحيح أما العكس، فتُعيد خطأ       |    منطق    | <pre> الأول < الثاني</pre> |
|  >=   | أكبر من أو يساوي | تفحص الرقمين، إن كان الرقم الأول أكبر من الثاني أو يُساويه تُعيد صحيح أما العكس، فتُعيد خطأ |    منطق    | <pre>الأول >= الثاني</pre> |
|  <=   | أصغر من أو يساوي | تفحص الرقمين، إن كان الرقم الأول أصغر من الثاني أو يُساويه تُعيد صحيح أما العكس، فتُعيد خطأ |    منطق    | <pre>الأول <= الثاني</pre> |
|  ==   |      يساوي       |           تفحص الرقمين، إن كانا يُساويان بعضهما تُعيد صحيح أما العكس، فتُعيد خطأ            |    منطق    | <pre>الأول == الثاني</pre> |
|  !=   |     لا يساوي     |               تفحص الرقمين، إن كانا مختلفين تُعيد صحيح أما العكس، فتُعيد خطأ                |    منطق    | <pre>الأول != الثاني</pre> |

### العمليات الثنائية المُغيرة للقيمة {#number-binary-assignment-operations}

| الرمز | اسم العملية  |                       الوظيفة                       | نوع الحاصل |                 مثال |
|:-----:|:------------:|:---------------------------------------------------:|:----------:|---------------------:|
|  +=   |  إضافة رقم   |   تضيف رقم على الرقم الأصلي، وترجع القيمة الجديدة   |    رقم     | <pre>عداد += 3</pre> |
|  -=   |   طرح رقم    |   تطرح رقم من الرقم الأصلي، وترجع القيمة الجديدة    |    رقم     | <pre>عداد -= 3</pre> |
|  *=   |   ضرب برقم   |  تضرب الرقم الأصلي برقم آخر، وترجع القيمة الجديدة   |    رقم     | <pre>عداد *= 3</pre> |
|  \=   | قسمة على رقم | تقسم الرقم الأصلي على رقم آخر، وترجع القيمة الجديدة |    رقم     | <pre>عداد \= 3</pre> |

### العمليات الأحادية {#number-unary-operations}

| الرمز | اسم العملية |           الوظيفة            | نوع الحاصل |            مثال |
|:-----:|:-----------:|:----------------------------:|:----------:|----------------:|
|   -   |     سلب     | ترجع قيمة العدد مضروبة بـ -1 |    رقم     | <pre>عدد-</pre> |

### العمليات الإصلاحية المؤخرة {#number-postfix}

| الرمز | اسم العملية  |                         الوظيفة                         | نوع الحاصل |              مثال |
|:-----:|:------------:|:-------------------------------------------------------:|:----------:|------------------:|
|  ++   | الجمع المؤخر | تضيف العدد 1 على العدد الأصلي، وترجع القيمة القديمة منه |    رقم     | <pre>++عداد</pre> |
|  --   | الطرح المؤخر | تضيف العدد 1 من العدد الأصلي، وترجع القيمة القديمة منه  |    رقم     | <pre>--عداد</pre> |

### العمليات الإصلاحية المقدمة {#number-prefix}

| الرمز | اسم العملية  |                         الوظيفة                         | نوع الحاصل |              مثال |
|:-----:|:------------:|:-------------------------------------------------------:|:----------:|------------------:|
|  ++   | الجمع المقدم | تضيف العدد 1 على العدد الأصلي، وترجع القيمة الجديدة منه |    رقم     | <pre>عداد++</pre> |
|  --   | الطرح المقدم | تضيف العدد 1 من العدد الأصلي، وترجع القيمة الجديدة منه  |    رقم     | <pre>عداد--</pre> |

## العمليات الحسابية على الشروط {#boolean-operations}

### العمليات الثنائية {#boolean-binary-operations}

| الرمز | اسم العملية |                                الوظيفة                                 | نوع الحاصل |                                              مثال |
|:-----:|:-----------:|:----------------------------------------------------------------------:|:----------:|--------------------------------------------------:|
|  &&   |    أيضا     |           تعيد صحيح إن كان كِلا الشرطين صحيحان، وخطأ غير ذلك           |    منطق    |                       <pre> الأول && الثاني</pre> |
|  \|\| |     أو     | تعيد صحيح إن كان أحد الشرطين صحيحًا، وخطأ غير ذلك |   منطق    |  <pre> الأول  \|\| الثاني</pre> |
|  ==   |    يساوي    | تفحص الشرطين، إن كانا يُساويان بعضهما تُعيد صحيح أما العكس، فتُعيد خطأ |    منطق    |                       <pre> الأول == الثاني</pre> |
|  !=   |  لا يساوي   | تفحص الشرطين، إن كانا يُساويان بعضهما تُعيد خطأ أما العكس، فتُعيد صحيح |    منطق    |                       <pre> الأول != الثاني</pre> |

### العمليات الأحادية {#boolean-unary-operations}

| الرمز | اسم العملية |                       الوظيفة                        | نوع الحاصل |            مثال |
|:-----:|:-----------:|:----------------------------------------------------:|:----------:|----------------:|
|   !   |     ليس     | تعكس نتيجة الشرط. إن كانت صحيح تعيد خطأ والعكس كذلك. |    منطق    | <pre>شرط!</pre> |

## العمليات الحسابية على المقاطع {#string-operations}

### العمليات الثنائية {#string-binary-operations}

| الرمز | اسم العملية |                                 الوظيفة                                 | نوع الحاصل |                                                    مثال |
|:-----:|:-----------:|:-----------------------------------------------------------------------:|:----------:|--------------------------------------------------------:|
|   +   |     جمع     |                       تجمع مقطعين وتُعيد الحاصل.                        |    مقطع    | <pre>"مرحبا" + " بالعالم"<br />الجواب هو :" + 10"</pre> |
|  ==   |    يساوي    | تفحص المقطعين، إن كانا يُساويان بعضهما تُعيد صحيح أما العكس، فتُعيد خطأ |    منطق    |                             <pre> الأول == الثاني</pre> |
|  !=   |  لا يساوي   | تفحص المقطعين، إن كانا يُساويان بعضهما تُعيد خطأ أما العكس، فتُعيد صحيح |    منطق    |                             <pre> الأول == الثاني</pre> |

