# Exercise 1

## Task 1 - Calling a promise and printing the response to the console

In `exercise001.js` you will find a simple function that creates a promise.

Building on what you learnt in "JavaScript Promises & Asynchronous Programming", call this promise using
`.then()` and `.catch()`

If the promise is successful, log out `Yay! Promise resolved with response: `, using string interpolation to print the response to the console.

If the promise fails, log out `Boo. Promise rejected with response: `. Use string interpolation to print the response to the console.

If your code works you should get a console messages that says `Yay! Promise resolved with response: done` when the promise is successful and `Boo. Promise rejected with response: error` when the promise fails.

Remember to commit your code to Git when you've got it working! 😊 🙌

## Task 2 - Convert your .then().catch() into Async & Await 💅

Great, so you're chaining `.then()` and `.catch()` onto your promise function to log out whether your promise resolves with a success or failure.

This is ok for something short and sweet, but if we have to call multiple promises this can result in something called "Promise-Callback Hell" - deeply nested Promises.

Task 2 is to convert your `.then()` and `.catch()` promise calls into a more sexy and modern Async / Await function. Use try / catch to log out success or error strings.

Have a go, if you get stuck [ see solutions ?]
