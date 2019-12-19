## Introduction

Twitter-like app created while exploring more into MongoDB, ExpressJS, React/Redux, and NodeJS (MERN) during my time at App Academy. Basic app where users are able to login or create an account, view all tweets on the app, view their own tweets, and create tweets.

The purpose of this project was to learn functionality and how the different parts of the MERN stack interact together to create a full web app in a pure `JavaScript` environment, rather than focusing on styling/UX/UI. 

## Features

**Tweet Feed**

Users can view all the tweets being sent out on the app. Create a tweet and navigate back to the home page to see your tweet now available to be seen by all other users.

**User Authentication**

User authentication for this app utilizes BCrypt to safely hash, salt, and store passwords. Instead of tracking sessions, `Node.js` has the `passport-jwt` module which allows instead for secure, token based authentication via JSON webtokens. With every request sent by `Express`, `passport-jwt` acts as middleware that ensures the proper authorization header is included and can be trusted.

**User Tweets** 

A user is able to both create tweets and view only the tweets they have created. This is the early stages of a tweet creation and profile page. This is done by making `axios` GET and POST requests to `/api/tweets/user/${id}` and `/api/tweets` respectively and updating the redux state accordingly via reducers. Components then render the appropriate state based on props. 

## Code Snippets

**Axios Frontend Routing**

Frontend routing via axios to provide information needed to get all tweets, get a particular user's tweets, and create a tweet.

<p align="center"> 
<img src="https://github.com/griffinsharp/MernTweeter/blob/master/images/axios.png">
</p>

**Backend Express Routing**

Upon a post request to create a new tweet, first the user's session is authenticated via `passport-jwt`. After this, errors are rendered, if any exist. Then, a new tweet instance is created from the Tweet class. If the tweet is saved correctly to the database, a response of the tweet itself is sent back as json. 

<p align="center"> 
<img src="https://github.com/griffinsharp/MernTweeter/blob/master/images/express.png">
</p>

**Example Schema**

Here is a look at my MongoDB Schema for Tweets. Each tweet has values for the user who created it, the text contents, and the time when created. User refers to an instance from the User table. The schema object is created, then passed to `mongoose.model()` to generate the actual tweet table in the database.

<p align="center"> 
<img src="https://github.com/griffinsharp/MernTweeter/blob/master/images/schema.png">
</p>

**Tweet Component**

`ComponentWillReceiveProps()` is utilized here to render a new tweet back to the user below the create tweet form after it is submitted.

<p align="center"> 
<img src="https://github.com/griffinsharp/MernTweeter/blob/master/images/tweetcomp.png">
</p>

## Technologies Used

- `JavaScript`
- `React` 
- `Redux` 
- `Express.js` 
- `Node.js` 
- `MongoDB` 
