---
sidebar_position: 6
---

# Comments

Learn about adding notes to your code without affecting its execution.

Documenting your code might sometimes be necessary, in order to explain your logic when you cannot make it any clearer. This is why
comments are often used to summarize the work of a function, the logic behind some variables and computations, etc.

## Syntax {#syntax}
The syntax of comments in **ABAJD** is very simple. A line that begins with a hash `#` is considered a comment.

Example:

```abjad
# هذا تعليق لا يؤثر في الكود
أكتب("مرحبا بالعالم")؛
```

## Effect {#effect}
Comments do not have any effect on the code itself, they are ignored when running. They are just used to help the readers understand the code.