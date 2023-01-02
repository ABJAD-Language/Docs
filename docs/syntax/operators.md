---
sidebar_position: 7
---

# Operators

Learn about all the equations you can form.

There are set of valid operations that you can use with each data type. Some of which are unary operations, i.e. require
one parameter, and others are binary operations, i.e. require two parameters.

## Number Operations {#number-operations}

### Binary Operations {#number-binary-operations}

| Operation |      Name      |                   Function                    | Return Type |                    Example |
|:---------:|:--------------:|:---------------------------------------------:|:-----------:|---------------------------:|
|     +     |    Addition    |    Adds two numbers and returns the result    |   Number    | <pre> الأول + الثاني</pre> |
|     -     |  Subtraction   |  Subtract two numbers and returns the result  |   Number    | <pre> الأول - الثاني</pre> |
|     *     | Multiplication | Multiplies two numbers and returns the result |   Number    | <pre> الأول * الثاني</pre> |
|     \     |    Division    |  Divides two numbers and returns the result   |   Number    | <pre> الأول \ الثاني</pre> |
|     %     |     Modulo     | Divides two numbers and returns the remainder |   Number    | <pre> الأول % الثاني</pre> |

### Binary Logical Operations {#number-binary-logical-operations}

| Operation |         Name          |                                         Function                                         | Return Type |                    Example |
|:---------:|:---------------------:|:----------------------------------------------------------------------------------------:|:-----------:|---------------------------:|
|     >     |     Greater Than      |       Checks if the first number is greater than the second and returns the result       |   Boolean   | <pre> الأول > الثاني</pre> |
|     <     |       Less Than       |        Checks if the first number is less than the second and returns the result         |   Boolean   | <pre> الأول < الثاني</pre> |
|    >=     | Greater Than or Equal | Checks if the first number is greater than or equal to the second and returns the result |   Boolean   | <pre>الأول >= الثاني</pre> |
|    <=     |  Less Than or Equal   |  Checks if the first number is less than or equal to the second and returns the result   |   Boolean   | <pre>الأول <= الثاني</pre> |
|    ==     |         Equal         |         Checks if the first number is equal to the second and returns the result         |   Boolean   | <pre>الأول == الثاني</pre> |
|    !=     |       Not Equal       |       Checks if the first number is not equal to the second and returns the result       |   Boolean   | <pre>الأول != الثاني</pre> |

### Binary Assignment Operations {#number-binary-assignment-operations}

| Operation |        Name         |                              Function                               | Return Type |              Example |
|:---------:|:-------------------:|:-------------------------------------------------------------------:|:-----------:|---------------------:|
|    +=     |   Add and Assign    |    Adds a number to the original one and returns the new result     |   Number    | <pre>عداد += 3</pre> |
|    -=     | Subtract and Assign | Subtracts a number from the original one and returns the new result |   Number    | <pre>عداد -= 3</pre> |
|    *=     | Multiply and Assign | Multiplies a number to the original one and returns the new result  |   Number    | <pre>عداد *= 3</pre> |
|    \=     |  Divide and Assign  |   Divides by a number the original one and returns the new result   |   Number    | <pre>عداد \= 3</pre> |

### Unary Operations {#number-unary-operations}
| Operation |   Name   |                    Function                    | Return Type |         Example |
|:---------:|:--------:|:----------------------------------------------:|:-----------:|----------------:|
|     -     | Negative | Returns the value of a number multiplied by -1 |   Number    | <pre>عدد-</pre> |

### Postfix Operations {#number-postfix}
| Operation |        Name         |                       Function                        | Return Type |           Example |
|:---------:|:-------------------:|:-----------------------------------------------------:|:-----------:|------------------:|
|    ++     |  Addition Postfix   |    Adds 1 to the number and returns the old value     |   Number    | <pre>++عداد</pre> |
|    --     | Subtraction Postfix | Subtracts 1 from the number and returns the old value |   Number    | <pre>--عداد</pre> |

### Prefix Operations {#number-prefix}
| Operation |        Name        |                       Function                        | Return Type |           Example |
|:---------:|:------------------:|:-----------------------------------------------------:|:-----------:|------------------:|
|    ++     |  Addition Prefix   |    Adds 1 to the number and returns the new value     |   Number    | <pre>عداد++</pre> |
|    --     | Subtraction Prefix | Subtracts 1 from the number and returns the new value |   Number    | <pre>عداد--</pre> |


## Boolean Operations {#boolean-operations}

### Binary Operations {#boolean-binary-operations}
| Operation |   Name    |                              Function                              | Return Type |                     Example |
|:---------:|:---------:|:------------------------------------------------------------------:|:-----------:|----------------------------:|
|    &&     |    AND    |      Returns true if the conditions are true, false otherwise      |   Boolean   | <pre> الأول && الثاني</pre> |
|    \|\|   |    OR     | Returns true if the any of the conditions is true, false otherwise |   Boolean    |  <pre> الأول  \|\| الثاني</pre> |
|    ==     |   Equal   |     Returns true if the conditions are equal, false otherwise      |   Boolean    | <pre> الأول == الثاني</pre> |
|    !=     | Not Equal |     Returns false if the conditions are equal, true otherwise      |   Boolean    | <pre> الأول != الثاني</pre> |

### Unary Operations {#boolean-unary-operations}
| Operation | Name |                        Function                         | Return Type |         Example |
|:---------:|:----:|:-------------------------------------------------------:|:-----------:|----------------:|
|     !     | NOT  | Returns true if the condition is false, false otherwise |   Boolean   | <pre>شرط!</pre> |


## String Operations {#string-operations}

### Binary Operations {#string-binary-operations}
| Operation |     Name      |                                 Function                                  | Return Type |                                                 Example |
|:---------:|:-------------:|:-------------------------------------------------------------------------:|:-----------:|--------------------------------------------------------:|
|     +     | Concatenation | Adds two strings or a string and a number together and returns the result |   String    | <pre>"مرحبا" + " بالعالم"<br />الجواب هو :" + 10"</pre> |
|    ==     |     Equal     |          Returns true if the strings are equal, false otherwise           |   Boolean   |                             <pre> الأول == الثاني</pre> |
|    !=     |   Not Equal   |          Returns false if the strings are equal, true otherwise           |   Boolean   |                             <pre> الأول == الثاني</pre> |


