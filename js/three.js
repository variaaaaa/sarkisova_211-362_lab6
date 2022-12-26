//Наименьшая цифра
function minDigit(){
    let x, result;
  
    x = document.getElementById("number3_1").value;
    
    let min = 9;
    let arr = new Array();
    arr = x.split('');
    
    for(let i = 0; i < arr.length; i++){
        if (parseInt(arr[i]) < min){
            min = arr[i];
        }
    }
    result = min;
    
    document.getElementById("result3").innerHTML = result
}