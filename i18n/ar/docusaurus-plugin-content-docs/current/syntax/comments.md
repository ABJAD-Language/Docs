---
sidebar_position: 6
---

# التعليقات

تعلّم\ي عن كيفية كتابة ملاحظات في الكود دون التأثير على سياق تطبيقه.
 
يكون توثيق الكود في بعض الأحيان أمرًا ضروريًا في سبيل تفسير المنطق وراءه عندما لا يكون الأمر واضحًا. لذلك، تُستعمل التعليقات
كثيرًا بهدف تلخيص عمل دالةٍ معينة، أو شرح المنطق وراء متغير معين أو عملية حسابية معنية، إلخ.

## الصياغة {#syntax}

صياغة التعليقات في **أبجد** سهلة للغاية. فكل سطر يبدأ بعلامة `#` يُعتبر تعليقًا.

مثال:

```abjad showLineNumbers
# هذا تعليق لا يؤثر في الكود
أكتب("مرحبا بالعالم")؛
```

## التأثير {#effect}

ليس للتعليقات أي أثر في الكود. هي فقط تُستعمل للتسهيل على القارئ فهم الهدف من الكود.