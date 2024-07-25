const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
}

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo']));   
console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo']));  

const fare = 10;
console.log(fareDoubler(fare)); 
console.log(fareTripler(fare)); 

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); 
