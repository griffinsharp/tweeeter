const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateTweetInput = require("../../validation/tweets");
const Tweet = require("../../models/Tweet");

router.get("test", (req, res) => {
    res.json({msg: "This is the tweet route"});
});

// POST ROUTE (create a new tweet)
router.post("/",
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { isValid, errors } = validateTweetInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
    
        const newTweet = new Tweet({
            user: req.user.id,
            text: req.body.text
        });

        newTweet
            .save()
            .then(tweet => res.json(tweet));
    }
);

// GET ROUTE (for all tweets)
// no passport authentication because don't matter who the user is for this route, unlike the POST route above. 
router.get("/", (req, res) => {
    Tweet
        // find the tweet based on these parameter (nothing)
      .find()
        // newest tweets come first
      .sort({ date: -1})
      .then(tweets => res.json(tweets))
      .catch(err => res.status(400).json(err));
});

// GET ROUTE (for specific user)
router.get("/user/:user_id", (req, res) => { 
    Tweet
    .find({user: req.params.user_id})
    .then(tweets => res.json(tweets))
    .catch(err => res.status.json(err));
});

// GET ROUTE (for specific tweet)
router.get("/:id", (req, res) => {
    Tweet
    .findById(req.params.id)
    .then(tweet => res.json(tweet))
    .catch(err => res.status(400).json(err));
});


module.exports = router;