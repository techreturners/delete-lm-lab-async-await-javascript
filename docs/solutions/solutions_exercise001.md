# Task 1 - Solution code

```JavaScript
promise
    .then((response) => {
        console.log(`Yay! Promise resolved with response: ${response}`)
    })
    .catch((response) => {
        console.log(`Boo. Promise rejected with response: ${response}`)
    })
```

# Task 2 - Solution code

```JavaScript
const getPromiseResponse = async () => {
    try {
        const result = await promise
        console.log(`Promise resolved with response: ${result}`)
    } catch (error) {
        console.log(`Promise resolved with response: ${error}`)
    }
}

getPromiseResponse()
```
