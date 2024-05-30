const palindromes = function (string) {
    let trimmedStr = string.replace(/[^\w]/g, "").toLowerCase();

    return trimmedStr.split('').reverse().join('').toLowerCase() == trimmedStr ? true : false

};

// Do not edit below this line
module.exports = palindromes;
