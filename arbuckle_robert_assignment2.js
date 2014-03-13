//alert("JavaScript works!");

/*Robert Arbuckle
03/12/2014
Project 2
Adventure Reimbursement Form 103B*/

const REIMBURSEMENT_QUESTCOMPLETE = 1000;
const REIMBURSEMENT_PER_KILL= 400;
var adventurerName;
var totalReimbursement;
var questComplete;
// var reimbursementPerKillMultiplier; Unused due to redesign. 
var rangedOrMelee;
var sotrySummary;


function greetUser(rangedOrMelee, adventurerName) { //used to greet the user 

    if ((rangedOrMelee == "Ranged") && (adventurerName == "Drusilla")) {
        console.log("Welcome back Guild Leader. I hope your quest concluded successfully.");
       // reimbursementPerKillMultiplier = 3; //Guild Masters... always wanting more!  --- decided to remove the multiplier this would work better in a function then a procedure and didn't really add anything of depth to the story. 
    }
    else {
        console.log("Hello " + adventurerName + " I hope you had good hunting");
        // reimbursementPerKillMultiplier = 1; see above comment
    }

}

function questCompletion(successfulQuest, adventurerName) { //this is the boolean function it takes the boolean from the confirm and the string adventurerName
    var numberOfObjectives = 10;
    var objectiveNumber=1;
    var objectiveComplete;
    
    while ((objectiveNumber <= numberOfObjectives)&&successfulQuest) { //while loop that continues until all the objectives have been verified or the quest is marked incomplete. 
        objectiveComplete=confirm("Did you complete objective number: " + objectiveNumber);
        if (objectiveComplete) {
            console.log("Objective number: " + objectiveNumber + " complete!");
            objectiveNumber++
        }
        else {
            console.log("You failed to complete objective number " + objectiveNumber + " the quest is not completed.");
            successfulQuest = false; //if a objective is not complete the quest was failed and the loop exits
        }
    }
    return successfulQuest; //returns boolean value

}

function payCalculator(totalkills, questComplete) { //this is the number function and calculates pay from the number of kills and adds the quest completion bonus if applicable
    var payFromKills=0;
    var totalPay=0;
    for (iterator = 1; iterator <= totalkills; iterator++) { //basic for loop
        payFromKills = payFromKills + REIMBURSEMENT_PER_KILL;
        console.log("From kill number " + iterator + "you have made " + REIMBURSEMENT_PER_KILL + " gold pieces. Your total so far is: " + payFromKills + " gold pieces."); //outputs the pay for the kill + the running total
    }
    
    if (questComplete) { //add the quest bonus if applicable
        totalPay = payFromKills + REIMBURSEMENT_QUESTCOMPLETE;
    }
    else {
        totalPay = payFromKills;
    }
    return totalPay; //returns the total amount the adventurer was paid. 

}

//function summaryOfEvents(adventurerName, rangedOrMelee, questComplete, totalReimbursement) {
//    var completedString;
//    
//}

adventurerName = prompt("What is your name?");
rangedOrMelee = prompt("Are you Ranged or Melee?");
//console.log(adventurerName); used for testing purposes to verify inputs in the log
//console.log(rangedOrMelee);
greetUser(rangedOrMelee, adventurerName); //calls the greetUser function - says hello to the user or guild leader. 
questComplete = questCompletion(confirm(adventurerName + " was your quest successful?"), adventurerName);
totalReimbursement=payCalculator(parseInt(prompt("How many monsters did you kill?")), questComplete);


console.log("Was your quest successful?: " + questComplete);
console.log("Your total pay was: " + totalReimbursement);



