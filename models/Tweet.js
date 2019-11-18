const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema ({
    // tweets have: user, text, and a date

    // user - active record like association
    // user id referencing the users table
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

// create the actual mongoose model (name, schema)
const Tweet = mongoose.model('tweet', TweetSchema);
// export the model
module.exports = Tweet;


// Created Schema, passed it to mongoose.model to make an actual model.
// can now make tweets that users can post and see 