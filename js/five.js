//Числа Фибоначчи
function fibo(){
    let n, result;

    n = document.getElementById("number5_1").value;
    n = parseInt(n);
    
    fib1 = fib2 = 1
    i = 0
    if (n === 1 || n === 2){
        result = 1;
    }else{while(i < n - 2){
        result = fib1 + fib2;
        fib1 = fib2;
        fib2 = result;
        i = i + 1;
    }}
    

    document.getElementById("result5").innerHTML = result
}