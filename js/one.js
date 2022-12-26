//Возведение в степень. 
function pow(){
    let x, n, result;
  
    x = document.getElementById("number1_1").value;
    x = parseInt(x);
    n = document.getElementById("number1_2").value;
    n = parseInt(n);
  
    result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    
    document.getElementById("result1").innerHTML = result
  }