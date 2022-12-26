// Нахождение НОД
function gcd(){
    let x, y, result;
  
    x = document.getElementById("number2_1").value;
    x = parseInt(x);
    y = document.getElementById("number2_2").value;
    y = parseInt(y);

    while (x != y){
        if (x > y){
            x = x - y;
        }
        else {
            y = y - x;
        }
    }
    result = x;
    
    document.getElementById("result2").innerHTML = result
  }
  