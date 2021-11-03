const capitalized = {
    capitalized: function (string) {
        let newStr = string.toLowerCase();
        return newStr.charAt(0).toUpperCase() + newStr.slice(1)
    }
}

module.exports = capitalized;