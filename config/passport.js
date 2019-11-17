const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./keys');

// Simply put - authentication middleware for node that just authenticates requests. 
// Passport - authenticates our token and constructs private routes.
// Register and login routes will return jwt webtokens in their res to be used on the FE.
// Eventually we will want to send the web token back in the header of every API request to our backend. 
// Passport authenticates that token using a "Strategy" (JwtStrategy).
// Strategy - authentication mechanism

// Where do we get out json webtoken? - Extract json webtoken from the header.
// Set it as the value to the key jwtFromRequest in the options hash. 
// Options is a POJO containing options to control how the token is extracted from the request. 
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

// Anonymous function, takes in passport as a param
// express middleware - next - middlware is done, hand to the next
// done is similar with more functionality. will eventually pass things we need to get to the front end.
// don't want passport to just hang or not give a response


// payload 
module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    // return the user to the frontend
                    return done(null, user);
                }
                // return false since there is no user
                return done(null, false);
            })
            .catch(err => console.log(err));
    }));
};