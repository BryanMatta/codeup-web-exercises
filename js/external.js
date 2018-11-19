function Movies() {

    alert("You have rented some movies for your kids each movie cost $3 per day");

    var LM = parseInt(prompt("How many days would you like to rent the little mermaid?"));
    var BB = parseInt(prompt("How many days would you like to rent Brother Bear?"));
    var HC = parseInt(prompt("How many days would you like to rent Hercules?"));

    var TotDays = LM + BB + HC;

    var TotPrice = 3 * TotDays;

    alert("The total price for all movies is: " + TotPrice + ".");

}

function Contract() {

    alert("You are a contractor for Google, Amazon, and Facebook.");

    var GL = parseInt(prompt("How much are you getting paid in Google?"));
    var AZ = parseInt(prompt("How much are you getting paid in Amazon?"));
    var FB = parseInt(prompt("How much are you getting paid in Facebook?"));

    var HFB = parseInt(prompt("How much time did you work at Facebook for this week?"));
    var HGL = parseInt(prompt("How much time did you work at Google for this week?"));
    var HAZ = parseInt(prompt("How much time did you work at Amazon for this week?"));

    var TotGL = GL * HGL;
    var TotFB = FB * HFB;
    var TotAZ = AZ * HAZ;
    var Total = TotAZ + TotFB + TotGL;

    alert("You are getting paid a total of $" + Total + " this week.");
}

function Schedule(){
    var Subject;
    var art = 20;
    var algebra = 15;
    var chemistry = 19;
    var maxStudents = 20;
    var schedule = parseInt(prompt("Please write the amount of classes you have on your schedule."));
    var maxSchedule = 5;
    var available;
    var classConf;
    var i;

    while(schedule < maxSchedule){
        available = maxSchedule - schedule;
        var conf = confirm("You have space for " + available + " more class(es), would you like to add more?");
        i = 0;
        if(conf){

            classConf = false;
            while(i == 0) {
                Subject = parseInt(prompt("Please enter subject number: \n 1:Algebra. \n 2:Chemistry. \n 3:Art."));
                if (Subject == 1) {
                    if (algebra >= maxStudents) {
                        alert("Class is full, please choose another class.");
                    }
                    else {
                        classConf = confirm("Class has space, would you like to be added.");
                        if (classConf) {
                            schedule++;
                            i++;
                            algebra++;
                        }
                    }
                }
                else if (Subject == 2) {
                    if (chemistry >= maxStudents) {
                        alert("Class is full, please choose another class.");
                    }
                    else {
                        classConf = confirm("Class has space, would you like to be added.");
                        if (classConf) {
                            schedule++;
                            i++;
                            chemistry++;
                        }
                    }
                }
                else{
                    if (art >= maxStudents) {
                        alert("Class is full, please choose another class.");
                    }
                    else {
                        classConf = confirm("Class has space, would you like to be added.");
                        if (classConf) {
                            schedule++;
                            i++;
                            art++;
                        }
                    }
                }
            }
        }
        else{
            break
        }
    }
    alert("Your schedule is full, we're sorry but you can't add any more classes.");
    alert("Thank you for using class scheduler online!")
}

function Offer(){
     var preMember = confirm("Are you a Premium Member?");
     var discount = parseInt(prompt("Please enter discount expiry date."));
     var expiry = parseInt(prompt("Please enter today's date."));
     var itemNum = parseInt(prompt("Please enter number of items bought."));

     if(preMember && discount >= expiry){
         alert("Discount has been applied.");
     }
     else if (itemNum >= 2 && discount >= expiry){
         alert("Discount has been applied.");
     }
     else{
         alert("Sorry, you do not meet the requirements for the discount.")
     }
}

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var favColor = prompt("what is your favorite color?");

alert("Great " + favColor + " is my favorite color too!");
