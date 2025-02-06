function countNumbers(){
    let result = {
        arrayToNine : [],
        arrayToZero : []
    };
    for ( let i = 0; i < 10; i ++) {
        result.arrayToNine.push(i);
    }

    for ( let j = 100; j >= 0; j -= 10) {
        result.arrayToZero.push(j);
    }
    return result;
}

console.log(countNumbers());
