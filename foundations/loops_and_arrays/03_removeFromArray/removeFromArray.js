const removeFromArray = function(arr, ...nums) {
    let result = arr.filter(num => !(nums.includes(num)));
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
