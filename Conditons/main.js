//Using if else conditions
console.log("...............Using If else condition...............")
let userAmount=250000;
let cardType="Platinum";

if(cardType=="Silver")
    {
        let sum1=userAmount*(5/100);
        console.log("Interest charged on amount "+userAmount+" for silver card user is "+ sum1 );
    }
else if(cardType=="Gold")
    {
        let sum2=userAmount*(10/100);
        console.log("Interest charged on amount "+userAmount+" for gold card user is "+ sum2 );
    }
else
    {
        let sum3=userAmount*(15/100);
        console.log("Interest charged on amount "+userAmount+" for platinum card user is "+ sum3 );           
    }

console.log("...............Using Switch case...............")
//Uding Switch case
switch(cardType){
    case "Silver":
        let sum4=userAmount*(5/100);
        console.log("Interest charged on amount "+userAmount+" for silver card user is "+ sum4 );
    break;
    case "Gold":
        let sum5=userAmount*(10/100);
        console.log("Interest charged on amount "+userAmount+" for gold card user is "+ sum5 );
    break;
    case "Platinum":
        let sum6=userAmount*(15/100);
        console.log("Interest charged on amount "+userAmount+" for platinum card user is "+ sum6 );
    break;
}