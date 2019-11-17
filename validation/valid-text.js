// makes sure its a string and makes sure its not jsut empty spaces (trim).
const validText = str => {
    return typeof str === 'string' && str.trim().length > 0;
}

module.exports = validText;
