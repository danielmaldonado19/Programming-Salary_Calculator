/*
Salary Operations

This program will give us data about the people income by country.
-Each country will have its person list.
-Each person has to have his/her own name and money income.
-Each person will be created as an object, the only 2 data they will tell is the name and the monthly income.

* Calculate the median.
* Calculate the mode.
NOTE: Each calculation has to be done for the 10% most wealthy people and the 90% left. 

//1. Create the first country list.
//2.Calculate the median.
*/

//2.
var orderedList = colombia.sort(compare);
function compare(a,b){
    let comparation = a.salary - b.salary;
    return comparation;
}

function median(colombia){
    let subIndex = parseInt(colombia.length / 2);
    let medianNum1 = colombia[subIndex].salary;
    let medianNum2 = colombia[subIndex - 1].salary;
    let median;
    
    if(colombia.length % 2 == 0){
        median = (medianNum1 + medianNum2) / 2;
    }
    else{
        median = colombia[subIndex];
    }
    return median;
}