function getHigher(num1, num2){
    var higher = 0;
    if (num1 > num2){
        higher = num1;
        return higher
    }
    else {
        higher = num2;
        return higher;
    }
}

function getLower(num1, num2) {
    var low = 0;
    if(num1<num2){
        low = num1;
        return low;
    }
    else{
        low = num2;
        return low;
    }
}

function getHighest(array) {
    var high = 0;
    for(var i =1; i < array.length-1; i++){
        if(getHigher(array[i], array[i-1]) > high){
            high = getHigher(array[i], getHigher([i-1]));
        }
    }
    console.log(high);
}

function getLowest(array) {
    var low = getLower(array[0], array[1]);
    for (var i = 1; i < array.length-1; i++){
        if(getLower(array[i],array[i-1]) < low){
            low = getLower(array[i],array[i-1]);
        }
    }
    console.log(low);
}

function sumAllNumbers(array) {
    var total = 0;
    array.forEach(function (subArray) {
        subArray.forEach(function (number) {
            total += number
        })
    })
}

var testArray = {
    [1,2,3],
    [4,5,6]
};