# Task 1 - Solution code

```JavaScript
const fetchData = async (apiEndPoint) => {
    try {
        const response = await fetch(apiEndPoint)
        const result = await response.json()
        console.log(result)
    }
    catch (error) {
        console.log(error)
    }
}
```
