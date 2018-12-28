// PROBLEM 1

// Write a function called arrayMultiply that takes two numbers, and a callback function as arguments. 
// Return the callback function with the two numbers (those arguments) multiplied together as its argument.

function arrayMultiply(num1, num2, callBack) {
    return callBack(num1 * num2)
}

arrayMultiply(5, 10, function(x) {
    console.log(x)
})

// / Define an array outside of this function. Because JS scope works differently to Ruby you will be able to use that array within the following function without passing it through as an argument. But please note that it will not be functional programming as such - but in this case if you use map a new array will be created (rather than the original being mutated).

const array = [1,2,3]

// // Define a variable and in it store the result of arrayMultiply when called with 2, 2, and also an anonymous callback function that takes the result as an argument, and then multiplies each element in the array by that result. When you console.log this variable to screen it should produce [ 4, 8, 12 ].

const result = arrayMultiply(2,2, function(result) {
        const newArray = []
        array.forEach(function(num) {
            newArray.push(num * result)
      })
      return newArray
})

console.log(`Problem 1: ${result}`)


// PROBLEM 2

// Write a function called arrayMultiplyAgain that takes a number and an array as arguments, and returns an array with each element in the array multiplied by the number.

function arrayMultiplyAgain(num, array) {
    const resultArray = []
    array.forEach(function(item) {
        resultArray.push(num * item)
    })
    return resultArray
}

console.log(`Problem 2: ${arrayMultiplyAgain(4, [3,6,9])}`
)

// Now write a second function called moreArrayMultiply that takes three arguments: a number, an array, and a function: (eg. num, arr, funct). Have this function return the result of number and array when called as arguments to arrayMultiplyAgain which you passed in as an argument.

function moreArrayMultiply(num, arr, func){
    return func(num, arr)
}

console.log(`Problem 2A: ${moreArrayMultiply(3, [6,12,18], arrayMultiplyAgain)}`)

// Define a variable and in it store the result of the second function when called with 2, [1,2,3], and the first function you created. When you console.log this variable to screen it should produce [ 2, 4, 6 ].

const problem2A = moreArrayMultiply(2, [1,2,3], arrayMultiplyAgain) 
console.log(problem2A)


// PROBLEM 3
// forEach() executes a provided function once for each array element. This method doesn’t actually return anything (undefined). It simply calls a provided function on each element in the array. This callback is allowed to mutate the calling array.

// Implement your own version of .forEach
// Define a function that takes a callback and provides the same functionality as the .forEach function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

  
// function myForEach(arr, function(elem, i, arr)) {
//     var newArr = []
//     newArr.push(cb(elem, i, arr))
//     return console.log(newArr)
// } 

// myForEach([5,6,7])


// PROBLEM 4
// The map() method is used to apply a function on every element in an array. A new array is then returned.

// Implement your own version of .map
// Define a function that takes a callback and provides the same functionality as the .map function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

function myMap(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] + 5;
    }
    // Printing 'arr' to show it remains unchanged:
    console.log(`Original Array: ${arr}`)
    // Returning and printing the new array:
    return console.log(`New Array (Map): ${newArr}`)
}

myMap([1, 2, 3, 4])


// PROBLEM 5
// The filter() method returns a new array created from all elements that pass a certain test preformed on an original array.

// Implement your own version of .filter
// Define a function that takes a callback and provides the same functionality as the .filter function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

function myFilter(arr){
    let evenNums = []
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) evenNums.push(arr[i])
    }
    return console.log(`Filtered Array: ${evenNums}`)
}

myFilter([3, 6, 9, 12, 15, 18, 21, 24])


// PROBLEM 6
// The reduce() method is used to apply a function to each element in the array to reduce the array to a single value.

// Implement your own version of .reduce
// Define a function that takes a callback and provides the same functionality as the .reduce function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

function myReduce(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return console.log(`Reduced Array: ${sum}`)
}

myReduce([10, 20, 30, 40])


// PROBLEM 7
// Define an object that has two keys, one called 'buy' and the other called 'sell'. These will have the value of an anonymous function that takes no arguments, and that simply returns a string. The function associated with 'buy' will return "I want to buy!!", and the other returns "I want to get out!!"

const buySell = {
    buy: function() {
        return console.log("I want to buy!!")
    },
    sell: function() {
        return console.log("I want to get out!!")
    }
}

// Define a function called originalFunction that takes two arguments, a number and an object, which you could call 'functionObject'. If the number is divisible by 2 then the function returns the functionObject's 'buy' function, and otherwise returns the 'sell' function.

function originalFunction(num, functionObject){
    if (num % 2 === 0)
        return functionObject[0]
    else
        return functionObject[1]
}

// Now call this function with a number and the object that you created as arguments, and store the result in a constant. Now work out how to get the string to display to the screen. 

const problem7 = originalFunction(5, buySell)

console.log(problem7)


// Brainstorming:

//     arrayMultiply(5, 10, function(x) {
//         console.log(x)
//         })

// const y = function() {
// console.log(this.name)
// }

// const x = {
// name: 'ruegen',
// printName: y
// }

// console.log(x.printName())


// function x(y) {
//     const z = y * 2
//     return (b) => {
//         const g = b * z
//         return (v) => {
//             return g - 10 + v
//         }
//     }
// }

// const result = x(10)(5)(1)

// console.log(result)

