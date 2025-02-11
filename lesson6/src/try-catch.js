async function fetchWithFallback(url, fallbackUrl){
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTML Error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn("Error to get response from main resource", error);
        try {
            console.log("Try to get response from second service");
            const fallBackResponse = await fetch(fallbackUrl);
            if (!fallbackUrl.ok) {
                throw new Error(`Second response failed! Status: ${fallBackResponse.status}`);
            }
            return await fallBackResponse.json();
        } catch (fallBackError) {
            throw new Error("Data undefined. Error to communicate with second service");
        }
    }
}

(async function() {
    try {
        const data = await fetchWithFallback('https://nonexistent-api.com/data', 'https://jsonplaceholder.typicode.com/todos/1');
        console.log("Data:", data);
    } catch (finalError){
        console.log(finalError.message);
    }
}) ();
