///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

const pizza = {
    Name: 'Pepperoni Pizza',
    price: 18.99,
    category: 'Entree',
    popularity: 'Number 1 Choice',
    rating: 5,
    tags: ['Gluten-free', 'nut-free', 'vegetarian', 'meat lover']

}



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(pizza.tags[2])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//destructure price property off of pizza object
const {price} = pizza
console.log(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

const {category} = pizza
console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//every element in the array is its own object
//objects are pasta alfredo, lasagna, tiramisu, prosciutto formaggio, spaghetti and meatballs
const foodArr = [
{   Name: "Pasta Alfredo ",
    price: 22.99,
    category: "Entree",
    popularity: "Our best-seller",
    rating: 5,
    tags: ['dairy-free', 'veggie only']
},
{ 
    Name: "Lasagna",
    price: 25.50,
    category: "Entree",
    popularity: " Customer favorite - Just like Grandma made it",
    rating: 5,
    tags: [ 'cheese-lover', 'veggie only', 'gluten-free']
},
{ 
    Name: "Tiramisu",
    price: 8.75,
    category: "Dessert",
    popularity: "Number 1 Dessert",
    rating: 5,
    tags: ['dairy-free', 'egg-free' ]
},
{ 
    Name: "Prosciutto & formaggio",
    price: 12.50,
    category: "Appetizer",
    popularity: "Popular appetizer",
    rating: 5,
    tags: ['cheese-lover', 'gluten-free']
},
{ 
    Name: "Spaghetti & Meatballs",
    price: 25.75,
    category: "Entree",
    popularity: "Second most popular choice",
    rating: 5,
    tags: ['dairy-free', 'cheese-lover', 'veggie only']
},

]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

// const filteredFood = foodArr.filter(/* CALLBACK HERE */) 

// const identifier = foodArr => {
//     const filteredFood = foodArr.filter(tag => tag.tags)  
//     return filteredFood[0]
// }
//  console.log(identifier(foodArr))

//second attempt
// const filteredFood = foodArr.filter(function(tag) {
//     return tag.tags === 'dairy-free';
// }) 
//  console.log(filteredFood)

////code in review
//loop over foodArr, for each individual object check specific tag and filter by
const filteredFood = foodArr.filter(pizzaObj => {

    return pizzaObj.tags.includes('poultry')
} )

console.log(filteredFood)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//1st attempt
// const filterByProperty = (property, number, type) => {
//     const filteredArray = foodArr.filter(callback)
// }

//code in review

const filterByProperty = (property, number, type) => {
                                        //foodEntrees is what I name it, but can be anything
    const filteredArr = foodArr.filter(foodEntrees => {
        if(type === "above"){
            //used foodEntrees[property] with bracket notation to ensure we access the property itself
            // similar to console logging it, we had to use it in quotes to ensure access to the actual property
            return foodEntrees[property] > number
        } else if(type = 'below') {
            return foodEntrees[property] < number
        } else {
            return 'you did not pass a valid type'
        }
    })
    return filteredArr
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/
//'price' is our property, check if above 6
//we are trying to filter by price property, specify name of propery of object we need to pass it as a string
console.log(filterByProperty('price', 6, 'above'))