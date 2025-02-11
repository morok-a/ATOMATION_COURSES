function fetchData(url){
    return fetch(url)
        .then(response => {
            if (response.ok){
                return response.json();
            } else {
                throw new Error(`Error! Status: ${response.status}`);
            }
        });
}

function processData(data) {
    console.log("Data:", data);
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => processData(data))
    .catch(error => console.error("Error:", error))
    .finally(() => console.log('finally'));
