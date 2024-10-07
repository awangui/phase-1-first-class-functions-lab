// Code your solution in this file!
const returnFirstTwoDrivers= (names)=>{
    return names.slice(0,2);
}
const returnLastTwoDrivers= (names)=>{
    return names.slice(-2);
}
//calling the functions
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
//array of selectingDrivers
let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(multiplier){
    return function (fare){
        return fare*multiplier;
    }
}
const fareDoubler =createFareMultiplier(2);
const fareTripler =createFareMultiplier(3);

function selectDifferentDrivers(names, driverSelector){
    return driverSelector(names);
}
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));