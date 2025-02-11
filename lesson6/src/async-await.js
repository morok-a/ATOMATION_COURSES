async function fetchData(url){
    try {
        const response = await fetch(url);
        if (response) {
            return await response.json();
        } else {
            throw new Error(`Error! Status: ${response.status}`);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

function processData(data) {
    console.log("Data:", data);
}

async function main() {
    const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
    if (data) {
        processData(data);
    }
}

main();
