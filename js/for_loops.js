

function showMultiplicationTable() {
    console.clear();
    var num = parseInt(prompt("Please choose a number"));
    
    for (var i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }
}

function increaseTriangle() {
    console.clear();
    for (var i = 1; i < 10; i++){
        var pir = '';
        for (var j = 0; j < i; j++){
        pir += i;
        }
        console.log(pir);
    }
}

function minusFive() {
    for (var i = 100; i >= 5; i -= 5){
        console.log(i);
    }
}

function randomOdd() {
    console.clear();
    for(var i = 0; i <= 10; i++) {
        var num = Math.floor(Math.random() * 180) + 20;
        if(num%2 == 0){
            console.log(num + " Is even");
        }
        else{
            console.log(num + " Is odd");
        }
    }
}
