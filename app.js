const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

// parser middleware
// app will also respond to postman, etc.  
// respond to json requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/tweets", tweets);
const port = process.env.PORT || 5000;


// tell Express to start a socket and listen for connections on the path.
app.listen(port, () => console.log(`Server is running on port ${port}`));

// node app in terminal willl start the server

