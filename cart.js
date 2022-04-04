///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)
// const summedPrice = cart.reduce(function(acc, cart) {
//     return acc + cart.price
// })

// console.log(summedPrice)


//code in review
/* reduce is built to take in a callback function and 
another parameter and separate those arguments
*/ 
//.reduce(acc, ord) => {},0) is all part of callback function
const summedPrice = cart.reduce((acc, ord) => {
    return acc + ord.price
}, 0)    //need to specify to start at zero

console.log(summedPrice)


// const greeter = (name, greeting) => {
//     return name + greeting
// }

// //this is the structure if we did not use .reduce
// greeter(() => {}, 'hello')


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//cartTotal, couponvalue, tax are parameters bc parameters are in the function declaration
//arguments are values that are passed into those functions

//code in review
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal * (1 + tax)) - couponValue
}

console.log(calcFinalPrice(10, 2, .25))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER 

    The properties my customer object would include are:
    1. 'Name' of the customer to save their account or verify identity it's their order
    2. 'DOB' date of birth for special promotions the restaurant may send out to their customers on their birthday
    3. 'Address' of the customer to ensure their order is delivered to the correct address
    4. 'Phone number' of the customer to call the customer in case their order was not picked up or there are issues with their order 

    Data Types for each property
    Name: 'string'          //customer name inputted as a string
    DOB: 'string'           //DOB as a string to make it easer to read and use 
    Address: 'string'       //address includes combination of characters and numbers, a string can capture everything
    PhoneNumber: 'string'   //chose a string to preserve phone number layout. If I use number as type the phone number format is a big cluster of numbers not very easy to read.
     

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const myCustomers = {
    Name: 'Maria',
    DOB: '3/11/88',
    Address: '435 East Lane St',
    PhoneNumber: '444-555-6666'
}