const capitalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = capitalize;