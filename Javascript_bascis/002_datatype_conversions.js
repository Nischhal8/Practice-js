// let score = "33";
// console.log(typeof(score));

// let valueInScore = Number(score) // it will convert into number 

// "33abc" => convert into number but "Nan" object will come
// true => 1 ; flase => 0 

// let isLoggedIn = "hello"
// let boolean_value = Boolean(isLoggedIn)
// console.log(boolean_value)

// let nomber = 33
// let convertNomber = String(nomber)
// console.log(typeof convertNomber)

//*********************** Operations *********************

// let value = 3
// let negativeValue = -value // This convert Positive value into Negative
// console.log(negativeValue)



// *********** comparison of datatypes **********

// console.log("2">1)
// console.log("02">1)

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// The reason is that equality check == and comparisons > <>= <= work differently.
//  Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null>0 is false

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);

// avoid these type of comparisons

// ************ Strict Check *************

// console.log("2" == 2);
// console.log(null === 0);

// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt




//Non-Primitive or Reference Type

// Array, Objects, Functions