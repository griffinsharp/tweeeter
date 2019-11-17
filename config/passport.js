const JwtStrategy = require('passport-jwt').Strategy;
const Extract = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');

// Passport - authenticates our token and constructs private routes.
// Register and login routes will return jwt webtokens in their res to be used on the FE.
// Eventuall we will want to send the web token back in the header of every API request to our backend. 
// Passport authenticates that token using a "Strategy" (JwtStrategy).


// Where do we get out json webtoken? - Extract json webtoken from the header.
// Set it as the value to the key jwtFromRequest in the options hash. 
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

// Anonymous function, takes in passport as a param
// express middleware - next - middlware is done, hand to the next
// done is similar with more functionality. will eventually pass things we need to get to the front end.
// don't want passport to just hang or not give a response

module.exports = passport => {
    passport.use( new JwtStrategy(options, (jwt_payload, done) => {
        console.log(jwt_payload);
        done();
    }));
};