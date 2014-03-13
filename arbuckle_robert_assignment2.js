//alert("JavaScript works!");

/*Robert Arbuckle
03/12/2014
Project 2
Adventure Reimbursement Form 103B*/

const REIMBURSEMENT_PER_MILE = 2.5;
const REIMBURSEMENT_PER_KILL= 400;
var adventurerName;
var totalReimbursement;
var successfulQuest;
var reimbursementPerKillMultiplier;
var rangedOrMelee;

adventurerName = prompt("What is your name?");
rangedOrMelee = prompt("Are you Ranged or Melee?");
//console.log(adventurerName); used for testing purposes to verify inputs in the log
//console.log(rangedOrMelee);
function SetReimbusementPerKill(rangedOrMelee, adventurerName) { //used to greet the user and set the per kill multiplier for the user

    if ((rangedOrMelee == "Ranged") && (adventurerName == "Drusilla")) {
        console.log("Welcome back Guild Leader your usual pay rate has been set");
        reimbursementPerKillMultiplier = 3; //Guild Masters... always wanting more!
    }
    else {
        console.log("Hello " + adventurerName + " I hope you had good hunting");
        reimbursementPerKillMultiplier = 1;
    }

}

SetReimbusementPerKill(rangedOrMelee, adventurerName);




