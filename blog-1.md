# Union and Intersection

# Union type
-  (|) allow a variable to hold one of different types, Providing flexibility when a value can be of multiple types. For example, a function might accept either a string or a number, Allows you to handle different inputs while maintaining type safety. (Example: function add(n string|number){console.log("ID:", id)}) 

# intersection type

- (&) combine multiple types into one, allowing you to create objects that must meet the requirements of all included types. This is useful for building complex types that need to fulfill multiple roles.(Example: interface Name {name: string;}interface Age {
    age: number;
}

type Person = Name & Age)