const getTheTitles = function(obj) {
    const array = [];
    for (const iterator of obj) {
        array.push(iterator.title);
    }
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
