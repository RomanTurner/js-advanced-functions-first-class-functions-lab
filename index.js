// Code your solution in this file!

const drivers = ["Sally", "Bob", "Freddy", "Claudia"];

const returnFirstTwoDrivers = (array) => array.slice(0, 2);

console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = (array) => array.slice(-2);
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier){
    return (fare) => {
       return fare * multiplier;
    };
}

const fareDoubler = (num) => createFareMultiplier(2)(num);
const fareTripler = (num) => createFareMultiplier(3)(num);

console.log(fareDoubler(8));

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}