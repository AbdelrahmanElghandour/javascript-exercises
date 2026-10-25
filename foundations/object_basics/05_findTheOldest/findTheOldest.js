const findTheOldest = function (arr) {
    const now = new Date();

    function getAgeInMs(person) {
        const birthDate = new Date(person.yearOfBirth);
        // If death is missing, null, or undefined, use current date
        const endDate = person.yearOfDeath ? new Date(person.yearOfDeath) : now;
        return endDate - birthDate;
    }

    return arr.reduce((oldest, current) => {
        return getAgeInMs(current) > getAgeInMs(oldest) ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
