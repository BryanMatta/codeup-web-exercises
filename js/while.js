function whileLoop() {
    console.clear();
    var num = 1;
    var i = 0;
    while(i < 16){
        num *= 2;
        console.log(num);
        i++
    }
}

function doWhile() { //Currently breaking page if ran ask Ryan for a possible work around
    console.clear();
    var allCones = Math.floor(Math.random() * 50) + 50;
    var removeCones = 0;
    do{
        removeCones = Math.floor(Math.random() * 5) + 1;
        if(allCones < removeCones){
            console.log(`Sorry but we can't sell you ${removeCones} cones we only have ${allCones}.`);
            continue;
        }

        console.log(`Sold ${removeCones} + " cones`);
        allCones -= removeCones;
    } while (allCones > 0);
    console.log("Yay we sold all them all!");
}