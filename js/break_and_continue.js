function breakCont() {
    console.clear();
    var i = 0;
    var num = 0;
    while (i < 1){
            num = parseInt(prompt("PLease enter an odd number between 1 and 50."))
        for (var j = 0; j < 50; j++){
            if(num % 2 == 0) {
                break;
            }
            else if (num >= 50){
                break;
            }
            else if(j == num){
                console.log("Yikes! Skipping number: " + num);
            }
            else if (j % 2 == 0){
                continue;
            }
            else{
                console.log("Here is an odd number: " + j);
            }
            i++
        }
    }
}