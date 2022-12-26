//Pluralization
function minDigit(){
    let x, result;
  
    x = document.getElementById("number4_1").value;
    x = parseInt(x);
    
    if (x % 10 == 1 && x % 100 != 11){
      result = "В результате выполнения запроса была найдена " + x + " запись";
    }
    else if (x % 10 == 0 || x % 10 == 5 || x % 10 == 6 || x % 10 == 7 || x % 10 == 8 || x % 10 == 9 || x % 100 == 11 || x % 100 == 12 || x % 100 == 13 || x % 100 == 14){
      result = "В результате выполнения запроса было найдено " + x + " записей";
    }
    else if ((x % 10 == 2 || x % 10 == 3 || x % 10 == 4) && (x % 100 != 12 || x % 100 != 13 ||x % 100 != 14)){
      result = "В результате выполнения запроса были найдены " + x + " записи";
    }
    
  
    document.getElementById("result4").innerHTML = result
  }