---
sidebar_position: 11
---

# Classes

**ABJAD** is an object-oriented language, that means you can define your own types!

Classes simply represents a custom type, where you defined some properties that a variable with this type has, as well
as what are the methods that this type can access.

## Syntax {#syntax}

### Defining a Class {#defining-a-class}

The syntax for defining a class in ABJAD is as the following:

1. The keyword `صنف`
2. The name of the class
3. An opening brace `{`
4. A set of declarations (variables, constants, functions, and constructors)
5. A closing brace `}`

#### Example {#defining-a-class-example}

The following example defined a class of name `إنسان` which has:

- two variables: a string `اسم` and a number `عمر`
- a setter method to update the value of each variable

```abjad
صنف إنسان {

  متغير مقطع اسم؛
  متغير رقم عمر؛
  
  دالة تعديل_الاسم(مقطع اسم_): لاشيء {
    اسم = اسم_؛
  }
  
  دالة تعديل_العمر(رقم عمر_): لاشيء {
    عمر = عمر_؛
  }

}

```

To define a variable of type `انسان`, you can do the following:

```abjad
متغير انسان محمد = انشئ انسان()؛
محمد.تعديل_الاسم("محمد")؛
محمد.تعديل_العمر(22)؛
أكتب("الاسم: " + محمد.اسم + "، العمر: " + محمد.عمر)؛
```

As you can see, now we have a custom type called `انسان` and just as the above example, I can define variables of this
type.

Once I do so, I can access all the declared variables and methods, that were declared in the class, from within the
variable itself using the dot `.`

### Defining a Constructor {#defining-a-constructor}

To create an instance of a defined class, you need to define a constructor inside the class' declaration. A constructor
is a special kind of function that is responsible of setting the state of the instance created. If no parameterless
constructor is defined, the class can be instantiated by calling on a default one that does nothing (similar to the
example above).

The syntax of defining a constructor is:

1. the keyword `منشئ`
2. open bracket `(`
3. arbitrary number of parameters (just like function declarations)
4. close bracket `)`
5. open brace `{`
6. some code
7. close brace `}`

#### Example {#defining-a-constructor-example}

An example of a constructor added to the class defined above:

```abjad
صنف إنسان {

  متغير مقطع اسم؛
  متغير رقم عمر؛
  
  منشئ(مقطع اسم_، رقم عمر_) {
    اسم = اسم_؛
    عمر = عمر_؛
  }

}

```

As you can see, with constructors we can define the values of the variables directly when instantiating a variable of
the class, with no need to use setters for that.

Now to define a variable of type `انسان`, you can do this:

```abjad
متغير انسان محمد = انشئ انسان("محمد"، 22)؛
أكتب("الاسم: " + محمد.اسم + "، العمر: " + محمد.عمر)؛
```

#### Multiple Constructors {#multiple-constructors}

You can declare more than one constructors for the same class as long as they don't have the same order of parameters.

#### Example {#multiple-constructors-example}

```abjad
صنف إنسان {

  متغير مقطع اسم؛
  متغير رقم عمر؛
  
  منشئ(مقطع اسم_، رقم عمر_) {
    اسم = اسم_؛
    عمر = عمر_؛
  }
  
منشئ(رقم عمر_) {  
    اسم = "بلا اسم"؛
    عمر = عمر_؛
  }

}

متغير انسان محمد = انشئ انسان("محمد"، 22)؛
أكتب("الاسم: " + محمد.اسم + "، العمر: " + محمد.عمر)؛

متغير انسان أحمد = انشئ انسان(31)؛
أكتب("الاسم: " + أحمد.اسم + "، العمر: " + أحمد.عمر)؛

```

### Instantiating a Class {#instantiating-a-class}

The syntax for instantiating a class in ABJAD is as the following:

1. The keyword `انشئ`
2. The name of the class
3. An opening parenthesis `(`
4. The parameters that the constructor takes, seperated by commas
5. A closing parenthesis `)`
6. A semicolon `؛`

### Accessing a Class's functions {#accessing-fields-and-functions}

To access the functions of a class's object, you type the name of the object, followed by a dot, then the name of the
function you want to access, giving it the needed parameters.

### Getters and Setters {#getters-and-setters}

To get the value of a field, it is recommended to use a member function rather than accessing it directly.

There are two convensional functions in this manner:
* **Getters**: are functions that simply return the value of the field.
* **Setters**: are functions that modify the value of the field.