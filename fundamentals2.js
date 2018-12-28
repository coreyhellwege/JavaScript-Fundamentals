// Sync and Async
// Most of JS works synchronously - that is, it runs each line of code in order, and waits while each line does its work. There are some things in JS that act asynchronously. These include API calls, setTimeout, and any function that handles events. But maybe it's better to see these things in action first.

// PROBLEM 8 (sychronicity):
// This will show the way JS functions when acting synchronously.
// Here we are doing something a bit different. I will provide the code, and it will be up to you to investigate it. Tinker around with it, and look at the output until you understand it. If you don't, come and ask me for help.

console.log("Problem 8")
// console.time() Starts a timer you can use to track how long an operation takes. Give each timer a unique name.
console.time('problem-8')

const looper = (cb) => {
    console.time('looper')
    for(i=0; i<100000000; i++){
    x = Math.random()
    }
    console.log("In looper")
    console.log("After loop!")
    // When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.
    console.timeEnd('looper')
    console.log("..now passing through to the cb..")
    // This function returns an anonymous callback function
    return cb()
}

looper(() => {
    // This callback function logs the time it took for the 'looper' function to execute
    console.timeEnd('problem-8')
    return console.log("Finished 8 in the callback")
})

// After the 'looper' function and it's callback function have both run, then the following code executes synchronously:
console.log("After looper")
console.log("..now heading off to other parts of the program!")
console.log("==================")


// PROBLEM 9 (asychronicity):
// Now we are going to have the same situation as the code in the previous question - except this time there is an asynchronous function: setTimout. Carefully observe the difference in behaviour by comparing the output with the previous example.

console.log("Problem 9”)
console.time('problem-9’)

const timeouter = (cb) => {
   console.time('timeouter')
   setTimeout(function() {
       console.log('After setTimeout!')
       console.log("..now passing through to the cb..")
       return cb()
   }, 6000)
   console.log('In timeouter')
   console.timeEnd('timeouter')
}

timeouter(() => {
   console.timeEnd('problem-9’)
   return console.log("Finished 9 in the callback!")
})

console.log("After timeouter")
console.log("..now heading off to other parts of the program!")
console.log("==================")

// Now contrast that with the functions that we encountered in Problem 8. You can see that while in 9 the entire program stops to wait for the loop, in 9 the program continues on, and other code would have been run before finally logging that it finally fully finished for real, it had escaped from the timeout, called the callback, and executed the callback code.