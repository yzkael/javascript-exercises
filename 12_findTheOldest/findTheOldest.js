const findTheOldest = function(array) {
    let oldestAge = 0;
    let oldestPerson = {};
    let age = 0;
    let currentDate = new Date();
    for (const iterator of array) {
        if (iterator.yearOfDeath === undefined) {
            age = currentDate.getFullYear() - iterator.yearOfBirth;
        } else{
            age = iterator.yearOfDeath - iterator.yearOfBirth;
        }
        if(age > oldestAge){
            oldestAge = age;
            oldestPerson = iterator;
        } 
    }
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
