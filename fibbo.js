//This function outputs the Fibbonacci sequence of 9:

const fibonacci = (n) => {
    if(n==1) {
        return [0, 1];
    } else {
        var fn = fibonacci(n - 1);
        fn.push(fn[fn.length - 1] + fn[fn.length - 2]);
        return fn;
    }
    console.log(fn);
}

console.log(fibonacci(9));