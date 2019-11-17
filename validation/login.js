const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function(data) {
    let errors = {};

    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';

// if the email is invalid
    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

// if the email field is empty
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

// if the password field is empty
    if (Validator.isEmpty(data.password)) {
        errrors.password = "Password field is required";
    }

// Object to show what the outcome of the function was:
// isValid will return boolean indicating if errors hash has any keys.

    return {
        errors,
        isValid: Object.keys(errors).length === 0 
    };
};