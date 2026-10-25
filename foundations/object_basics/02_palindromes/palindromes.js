const palindromes = function (str) {
    let l = 0;
    let r = str.length - 1;

    function isAlphaNumeric(char) {
        return /^[a-z0-9]$/i.test(char);
    }

    while (l <= r) {
        while (!isAlphaNumeric(str[l])) {
            l++;
        }
        while (!isAlphaNumeric(str[r])) {
            r--;
        }

        if (l <= r && str[l].toLowerCase() != str[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
