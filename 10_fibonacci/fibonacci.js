const fibonacci = function(value) {
    const number = Number(value);
    if(number === 0) return 0;
    if(number === 1) return 1;
    if(number < 0) return "OOPS";
    const array = [0,1];

    //Get fibonnacci 
    for (let index = 2; index < value; index++) {
        array.push(array[index-1]+array[index-2]);  
    }
    return array[value-1];

};

// Do not edit below this line
module.exports = fibonacci;
