# Java Cheat Sheet

## Java Keywords

### abstract
- declares an abstract class or method
```java
abstract class Animal { 
    abstract void makeSound(); 
}
```

### assert
- used for debugging. Throws an error is the condition is false.
```java
assert x > 0;
```

### break	
- Exits from a loop or switch statement	break;
```java
for (int i = 0; i<100; i++){
    if(i == 50){
        break;
    }
}
```

### byte	
- Declares an 8-bit integer variable	
```java
byte b = 100;
```

### case	
- Defines a branch in a switch statement	
```java
case 1:
```

### catch	
- Catches exceptions thrown by try block	
```java
catch (Exception e) { }
```

### char	
- Declares a character variable	
```java
char c = 'A';
```

### class	
- Declares a class	
```java
class MyClass { }
```

### const	
- Reserved keyword, but not used. Java uses `final` keyword to create constants.
```java
private String const = "Test"; // Compilation error.

private const MAX_VALUE = 10; // Compilation error.

private final MAX_VALUE = 10; // This is correct.

```

### continue	
- Skips the rest of the loop iteration	
```java
for (int i=0; i<10; i++){
    if(i > 7){
        continue;
    }
    System.out.print(i);
}
```
- The output will be: `01234567`

### default	
- Specifies the default case in a switch statement	
```java
default:
```

### do	
- Starts a do-while loop	
```java
do { } while (condition);
```

### double
- Declares a double-precision floating-point variable	
```java
double pi = 3.14;
```

### else
- Specifies the alternative branch of an if statement	
```java
else { }
```

### enum	
- Declares an enumeration	
```java
enum Color { RED, GREEN, BLUE }
```

### extends	
- Indicates that a class is derived from another class	
```java
class Dog extends Animal { }
```

### final	
- Declares a constant or prevents method overriding	final int MAX = 100;

### finally
- Executes code after try and catch blocks	finally { }

### float	
- Declares a single-precision floating-point variable	float pi = 3.14f;

### for	
- Starts a for loop	for (int i = 0; i < 10; i++)

### goto	
- Reserved keyword, not used	// Reserved, not used

### if	
- Starts an if statement	if (condition) { }

### implements	
- Indicates that a class implements an interface	class MyClass implements MyInterface { }

### import	
- Imports other Java packages or classes	import java.util.List;

### instanceof	
- Tests whether an object is an instance of a class	if (obj instanceof MyClass) { }

### int	
- Declares an integer variable	int x = 10;

### interface	
- Declares an interface	interface MyInterface { }

### long	
- Declares a long integer variable	long l = 1000L;

### native	
- Indicates that a method is implemented in native code	native void myNativeMethod();

### new	
- Creates new objects	MyClass obj = new MyClass();

### null	
- Represents a null reference	MyClass obj = null;

### package	
- Declares a package	package com.example;

### private	
- Declares a private member	private int x;

### protected	
- Declares a protected member	protected int x;

### public	
- Declares a public member	public int x;

### return	
- Exits a method and optionally returns a value	return x;

### short	
- Declares a short integer variable	short s = 10;

### static	
- Declares a static member	static int x;

### strictfp	
- Restricts floating-point calculations to ensure portability	strictfp class MyClass { }

### super	
- Refers to the superclass	super();

### switch	
- Starts a switch statement	switch (x) { case 1: }

### synchronized	
- Indicates that a method or block is synchronized	synchronized (this) { }

### this	
- Refers to the current object	this.x = 10;

### throw
- Throws an exception	throw new Exception("Error");

### throws	
- Declares exceptions that a method can throw	void myMethod() throws IOException;

### transient	
- Indicates that a field is not serialized	transient int x;

### try	
- Starts a block to handle exceptions	try { } catch (Exception e) { }

### void	
- Specifies that a method does not return a value	void myMethod() { }

### volatile	
- Indicates that a variable's value may be modified by different threads	volatile int x;

### while	
- Starts a while loop	while (condition) { }
